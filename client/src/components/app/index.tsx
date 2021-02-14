import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/home'

import { HOME } from 'constants/routes';

import './index.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path={HOME} component={Home} />

        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
