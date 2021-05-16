import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';

import Theme, { GlobalStyle } from './assets/theme';
import * as serviceWorker from './utils/serviceWorker';

import configureAppStore from './store';

const store = configureAppStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
serviceWorker.register();
