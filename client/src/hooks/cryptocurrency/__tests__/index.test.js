import { renderHook, act } from '@testing-library/react-hooks';
import { waitFor } from '@testing-library/react';

import { CryptocurrencyProvider, useCrypto } from '../';

const TestComponent = ({ children }) => {
	return <CryptocurrencyProvider>{children}</CryptocurrencyProvider>;
};

describe('Cryptocurrency Hook', () => {
	it('should set the data when setCryptocurrency is called', async () => {
		const data = {
			code: 'BTC',
			id: 1,
			price: 100,
			quotes: [
				{ currency: 'USD', quote: 100 },
				{ currency: 'EUR', quote: 200 },
			],
		};

		const { result } = renderHook(() => useCrypto(), {
			wrapper: ({ children }) => <TestComponent>{children}</TestComponent>,
		});

		const { setCryptocurrency } = result.current;

		expect(result.current.cryptocurrency).toBeNull();

		act(() => {
			setCryptocurrency(data);
		});

		await waitFor(() => {
			expect(result.current.cryptocurrency).toEqual(data);
		});
	});
});
