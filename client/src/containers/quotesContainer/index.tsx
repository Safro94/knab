import Quote from '../../components/quote';

import { useCrypto } from '../../hooks/cryptocurrency';

import { IQuote } from '../../types/index';

import './index.scss';

const QuotesContainer = () => {
  const { cryptocurrency, searched } = useCrypto();

  return (
    <section className='quotes-container'>
      {searched && !cryptocurrency && <h2 className='quotes-container__error'>We couldn't find any cryptocurrency with that code, please try with another one</h2>}
      {cryptocurrency &&
        <>
          <h2 className='quotes-container__title'>Cryptocurrency: {cryptocurrency?.name} - {cryptocurrency?.code}</h2>
          <div className='quotes-container__items'>
            {
              cryptocurrency?.quotes.map((item: IQuote) => <Quote key={item.currencyCode} item={item} />)
            }
          </div>
        </>
      }
    </section>
  )
}

export default QuotesContainer;
