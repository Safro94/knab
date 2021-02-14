import { render, screen, waitFor } from '../../../utils/test-utils';
import SearchContainer from '../';

import fetcher from '../../../utils/fetcher';
import { useCrypto } from '../../../hooks/cryptocurrency';

import userEvent from '@testing-library/user-event';

const mockSetCryptocurrency = jest.fn();

jest.mock('../../../hooks/cryptocurrency', () => {
	return {
		useCrypto: jest.fn(),
	};
});

jest.mock('../../../utils/fetcher');

describe('Search Container', () => {
	const fetcherResponse = {
		code: 'BTC',
		name: 'Bitcoin',
		id: 1,
		price: 100,
		quotes: [
			{ currencyCode: 'USD', currencyName: 'U.S. Dollar', quote: 100 },
			{ currencyCode: 'EUR', currencyName: 'Euro', quote: 200 },
		],
	};

	beforeEach(() => {
		useCrypto.mockImplementation(() => ({
			setCryptocurrency: mockSetCryptocurrency,
		}));

		fetcher.mockImplementation(() => Promise.resolve(fetcherResponse));
	});

	it('should fill the form and activate the button', async () => {
		render(<SearchContainer />);

		const input = screen.getByPlaceholderText(/enter cryptocurrency code/i);
		const button = screen.getByText(/search/i);

		expect(button).toBeDisabled();
		userEvent.type(input, 'btc');

		await waitFor(() => {
			expect(button).not.toBeDisabled();
		});
	});

	it('should set the data and period when the submit button is clicked', async () => {
		render(<SearchContainer />);

		const input = screen.getByPlaceholderText(/enter cryptocurrency code/i);
		const button = screen.getByText(/search/i);
		const code = 'btc';

		expect(button).toBeDisabled();
		userEvent.type(input, code);
		userEvent.click(button);

		await waitFor(() => {
			expect(fetcher).toHaveBeenCalledTimes(1);
			expect(fetcher).toHaveBeenCalledWith({
				url: `${process.env.REACT_APP_SERVER_URL}/api/cryptocurrency/${code}`,
			});

			expect(mockSetCryptocurrency).toHaveBeenCalledTimes(1);
			expect(mockSetCryptocurrency).toHaveBeenCalledWith(fetcherResponse);
		});
	});
});
