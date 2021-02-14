import React, { createContext, useContext, useReducer } from 'react';

import { ICryptocurrency } from 'types/index';

enum Types {
  SET_CRYPTOCURRENCY = 'SET_CRYPTOCURRENCY'
}

type CurrencyContextType = {
  cryptocurrency: ICryptocurrency | null;
  searched: boolean;
}

type Action = {
  type: Types;
  value: ICryptocurrency | null;
}

const initialState = { cryptocurrency: null, searched: false }

const CryptocurrencyContext = createContext<[
  state: CurrencyContextType,
  dispatch: React.Dispatch<Action>
]>([
  initialState,
  () => null
]);

const useCrypto = () => {
  const [application, setApplication] = useContext(CryptocurrencyContext);

  const setCryptocurrency = (value: ICryptocurrency | null) => {
    setApplication({ type: Types.SET_CRYPTOCURRENCY, value })
  };

  return { ...application, setCryptocurrency };
};

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case Types.SET_CRYPTOCURRENCY:
      return { ...state, cryptocurrency: action.value, searched: true }
    default:
      return state;
  }
};

const CryptocurrencyProvider: React.FC = ({ children }) => {
  return (
    <CryptocurrencyContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CryptocurrencyContext.Provider>
  );
};

export { useCrypto, CryptocurrencyProvider };