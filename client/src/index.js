import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import 'bulma/css/bulma.css';

ReactDOM.render(
  <BrowserRouter className="backgroundGeneral">
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
serviceWorker.unregister();
