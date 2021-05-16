import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import scoreReducer from './scoreReducer';

export default function configureAppStore(initialState = {}) {
  const store = configureStore({
    reducer: scoreReducer,
    middleware: [...getDefaultMiddleware()],
    devTools: process.env.NODE_ENV !== 'production',
    initialState,
  });
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./scoreReducer', () => store.replaceReducer(scoreReducer));
  }
  return store;
}
