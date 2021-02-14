import { render, screen } from '../../../utils/test-utils';
import Form from '../';

describe('Form', () => {
	it('should render an input and a button', () => {
		render(
			<Form>
				<Form.TextInput placeholder='Enter code' value='btc' />

				<Form.Submit disabled>Search</Form.Submit>
			</Form>
		);

		expect(screen.getByPlaceholderText(/enter code/i)).toBeInTheDocument();
		expect(screen.getByText(/search/i)).toBeDisabled();
	});

	it('should have a button not disabled', () => {
		render(
			<Form>
				<Form.Submit>Search</Form.Submit>
			</Form>
		);

		expect(screen.getByText(/search/i)).not.toBeDisabled();
	});
});
