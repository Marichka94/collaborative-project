<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
=======
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { BrowserRouter as Router } from 'react-router-dom'

>>>>>>> 711ce0c1fb50e192830bbb207a759cdc23056e55

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
