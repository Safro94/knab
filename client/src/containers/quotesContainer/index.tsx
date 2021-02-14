import { useCrypto } from 'hooks/cryptocurrency';

import { IQuote } from 'types/index'

const QuotesContainer = () => {
  const { cryptocurrency, searched } = useCrypto();

  console.log(cryptocurrency);
  return (
    <section>
      {searched && !cryptocurrency && <h2>We couldn't find any cryptocurrency with that code, please try with another one</h2>}
      {
        cryptocurrency?.quotes.map((item: IQuote) => (<div><h1>{item.quote}</h1></div>))
      }
    </section>
  )
}

export default QuotesContainer;
