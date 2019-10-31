import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import '@babel/polyfill';
import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) module.hot.accept('./components/App', () => render(App));
