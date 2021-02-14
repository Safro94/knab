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

  const isInvalid = code?.trim() === '';

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    fetcher({
      url: `${process.env.REACT_APP_SERVER_URL}${GET_CRYPTO_ENDPOINT}${code}`,
    }).then((res: ICryptocurrency) => {
      !res ? setCryptocurrency(null) : setCryptocurrency(res)
    }, handleError);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value);
  }

  return (
    <section className='search-container'>
      <Form className='search-container__form' onSubmit={onSubmit} method='POST'>
        <div className='search-container__input-wrapper'>
          <Form.TextInput
            placeholder='Enter cryptocurrency code (e.g. BTC)'
            onChange={onChange}
            value={code}
            className='search-container__text-input'
          />
        </div>

        <Form.Submit className='search-container__submit' disabled={isInvalid}>Search</Form.Submit>
      </Form>
    </section>
  )
}

export default SearchContainer
