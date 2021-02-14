import { render, screen } from '../../../utils/test-utils';

import Error from '../';
import userEvent from '@testing-library/user-event';

describe('Error', () => {
		it('should show an image and a text', () => {
		render(<Error />);

		expect(screen.getByAltText(/error/i)).toBeInTheDocument();
		expect(screen.getByText(/ooops, there's been an error, please try again in a few minutes/i)).toBeInTheDocument();
		expect(screen.getByText(/go back to the home page/i)).toBeInTheDocument();
	});

		it('should call resetErrorBoundary when the reset text is clicked', () => {
		const resetErrorBoundary = jest.fn();

		render(<Error resetErrorBoundary={resetErrorBoundary} />);

		userEvent.click(screen.getByText(/go back to the home page/i));
		expect(resetErrorBoundary).toHaveBeenCalledTimes(1);
	});
});
