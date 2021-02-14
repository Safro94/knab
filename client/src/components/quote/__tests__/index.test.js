import { render, screen } from '../../../utils/test-utils';
import Quote from '../';

describe('Quote', () => {
	it('should render a quote', () => {
		const item = {
			quote: '200',
			currencyCode: 'USD',
			currencyName: 'U.S. Dollar',
		};

		render(<Quote item={item} />);

		expect(screen.getByTestId('icon')).toBeInTheDocument();
		expect(screen.getByText(/usd 200/i)).toBeInTheDocument();
		expect(screen.getByText(/u.s. dollar/i)).toBeInTheDocument();
	});
});
