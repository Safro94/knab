import SearchContainer from 'containers/searchContainer';
import QuotesContainer from 'containers/quotesContainer';

import { useCrypto } from 'hooks/cryptocurrency';

const Home = () => {
  const { searched } = useCrypto();

  return (
    <>
      <SearchContainer />
      {searched && <QuotesContainer />}
    </>
  )
}

export default Home
