import '@testing-library/jest-dom';

process.env.REACT_APP_SERVER_URL = 'http://test:9000';

jest.mock('./components/icon', () => () => (
	<span data-testid='icon'>icon</span>
));
