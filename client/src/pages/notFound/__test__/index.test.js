import { render, screen } from '../../../utils/test-utils';
import NotFound from '../';

describe('Not Found', () => {
	it('should have an icon and a text', () => {
		render(<NotFound />);

		expect(screen.getByTestId('icon')).toBeInTheDocument();
		expect(screen.getByText(/go back to /i)).toBeInTheDocument();
		expect(screen.getByRole('link').href).toBe('http://localhost/');
	});
});
