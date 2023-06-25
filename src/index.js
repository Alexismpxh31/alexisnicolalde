import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './Mycomponent';
import MyTable from './MyTable';
import MyName from './MyName';
import RedPanda from './redPanda';
import Paisaje from './paisaje';
import DesMond from './DesMond';
import Final from './final';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyName/>
    <MyComponent />
    <RedPanda />
    <Paisaje />
    <DesMond/>
    <Final />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
