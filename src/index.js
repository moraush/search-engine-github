import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter, Routes,Route} from 'react-router-dom'


ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
