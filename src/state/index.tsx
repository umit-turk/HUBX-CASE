import {persistReducer} from 'redux-persist';
import {applyMiddleware, compose, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import persistStore from 'redux-persist/es/persistStore';
import promise from 'redux-promise-middleware';
import { RootReducer } from './reducer';
import {Provider} from 'react-redux';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';

const middleware = [promise, thunk];

const persistConfig = {
  key: 'hubx',
  storage: AsyncStorage,
};

export const store = createStore(
  persistReducer(persistConfig, RootReducer),
  undefined,
  compose(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);

export const State = ({children}) => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
};