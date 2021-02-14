import { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary';

import Form from 'components/form';

import { useCrypto } from 'hooks/cryptocurrency';

import fetcher from 'utils/fetcher';

import { GET_CRYPTO_ENDPOINT } from 'constants/endpoints';

import { ICryptocurrency } from 'types/index';

import './index.scss';

const SearchContainer = () => {
  const { setCryptocurrency } = useCrypto();
  const handleError = useErrorHandler();

  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<string>('');

  const isInvalid = code === '';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetcher({
      url: `${process.env.REACT_APP_SERVER_URL}${GET_CRYPTO_ENDPOINT}${code}`,
    }).then((res: ICryptocurrency) => {
      if (!res) {
        setError(error)
        setCryptocurrency(null)
      } else {
        setCryptocurrency(res)
      }
    }, handleError);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value);
  }

  return (
    <section>
      <Form className='form' onSubmit={onSubmit} method='POST'>
        <div className='form__input-wrapper'>
          <Form.TextInput
            placeholder='Enter cryptocurrency code (e.g. BTC)'
            onChange={onChange}
            value={code}
            className='form__text-input'
          />
          {/* {error && <Form.Error>{error}</Form.Error>} */}
        </div>

        <Form.Submit className='form__submit' disabled={isInvalid}>Search</Form.Submit>
      </Form>
    </section>
  )
}

export default SearchContainer
