import { render, screen, waitFor } from '../../../utils/test-utils';
import Home from '../';

import { useCrypto } from '../../../hooks/cryptocurrency';

jest.mock('../../../hooks/cryptocurrency', () => {
	return {
		useCrypto: jest.fn(),
	};
});

describe('Home', () => {
	it('should show the quotes when searched is true', async () => {
		useCrypto.mockImplementation(() => ({
			searched: true,
			cryptocurrency: {
				code: 'BTC',
				name: 'Bitcoin',
				id: 1,
				price: 100,
				quotes: [
					{ currencyCode: 'USD', currencyName: 'U.S. Dollar', quote: 100 },
					{ currencyCode: 'EUR', currencyName: 'Euro', quote: 200 },
				],
			},
		}));

		render(<Home />);

		await waitFor(() => {
			expect(
				screen.getByPlaceholderText(/enter cryptocurrency code/i)
			).toBeInTheDocument();
			expect(screen.getByText(/search/i)).toBeInTheDocument();
			expect(
				screen.getByText(/cryptocurrency: bitcoin - btc/i)
			).toBeInTheDocument();
			expect(screen.getAllByTestId('quote')).toHaveLength(2);
		});
	});

	it('should not show the quotes when searched is true but cryptocurrency does not have data', async () => {
		useCrypto.mockImplementation(() => ({
			searched: true,
			cryptocurrency: null,
		}));

		render(<Home />);

		await waitFor(() => {
			expect(
				screen.getByPlaceholderText(/enter cryptocurrency code/i)
			).toBeInTheDocument();
			expect(screen.getByText(/search/i)).toBeInTheDocument();
			expect(
				screen.queryByText(/cryptocurrency: bitcoin - btc/i)
			).not.toBeInTheDocument();
			expect(
				screen.getByText(
					/We couldn't find any cryptocurrency with that code, please try with another one/i
				)
			).toBeInTheDocument();
		});
	});

	it('should not show the quotes component at all when searched is false', async () => {
		useCrypto.mockImplementation(() => ({
			searched: false,
		}));

		render(<Home />);

		await waitFor(() => {
			expect(
				screen.getByPlaceholderText(/enter cryptocurrency code/i)
			).toBeInTheDocument();
			expect(screen.getByText(/search/i)).toBeInTheDocument();
			expect(
				screen.queryByText(/cryptocurrency: bitcoin - btc/i)
			).not.toBeInTheDocument();
			expect(
				screen.queryByText(
					/We couldn't find any cryptocurrency with that code, please try with another one/i
				)
			).not.toBeInTheDocument();
		});
	});
});
