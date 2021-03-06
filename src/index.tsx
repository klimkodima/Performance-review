import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material/styles';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import store, { persistor } from './store';

import './i18n';

import './styles/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
