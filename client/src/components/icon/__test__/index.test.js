import { render, screen } from '../../../utils/test-utils';
import Icon from '../';

describe('Icon', () => {
	it('should render an icon', () => {
		render(<Icon name='USD' />);

		expect(screen.getByTestId('icon')).toBeInTheDocument();
	});
});
