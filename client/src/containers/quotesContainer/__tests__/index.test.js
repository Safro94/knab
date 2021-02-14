import { render, screen } from '../../../utils/test-utils';
import QuotesContainer from '../';

import { useCrypto } from '../../../hooks/cryptocurrency';

jest.mock('../../../hooks/cryptocurrency');

describe('Quotes container', () => {
	it('should render a title and 2 elements when cryptocurrency has data', () => {
		useCrypto.mockImplementation(() => {
			return {
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
			};
		});

		render(<QuotesContainer />);

		expect(
			screen.getByText(/cryptocurrency: bitcoin - btc/i)
		).toBeInTheDocument();
		expect(screen.getAllByTestId('quote')).toHaveLength(2);
	});

	it('should render an error message when the cryptocurrency was searched but not found', () => {
		useCrypto.mockImplementation(() => {
			return {
				cryptocurrency: null,
				searched: true,
			};
		});

		render(<QuotesContainer />);

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
