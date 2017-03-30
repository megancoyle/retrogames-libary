import '../dist/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

filepicker.setKey("ADD_IT_HERE");

// views rendered inside the #content div
ReactDOM.render(
  Routes,
  document.getElementById('content')
);
