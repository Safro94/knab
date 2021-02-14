import { render, screen } from '../../../utils/test-utils';

import Header from '../';

describe('Header', () => {
	it('should show an icon and three links', () => {
		render(<Header />);

		expect(screen.getByTestId('icon')).toBeInTheDocument();
		expect(screen.getAllByRole('link')).toHaveLength(3)
		expect(screen.getAllByRole('link')[0].href).toBe('http://localhost/')
	});
});
