import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Error from 'components/error';
import Header from 'components/header';

import Home from 'pages/home'
import NotFound from 'pages/notFound'

import { CryptocurrencyProvider } from 'hooks/cryptocurrency';

import { HOME } from 'constants/routes';

import './index.scss';

const App: FC = () => {
  return (
    <div className="app">

      <div className='app__container'>
        <Header />

        <ErrorBoundary FallbackComponent={Error}>
          <Switch>
            <Route exact path={HOME}>
              <CryptocurrencyProvider>
                <Home />
              </CryptocurrencyProvider>
            </Route>

            <Route component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
