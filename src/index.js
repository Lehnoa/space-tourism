import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from 'assets/shared/logo.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Helmet>
        <title>Space Tourism</title>
        <meta name="description" 
          content="Space Tourism - Touring Our Solar System with Ease. (A Frontend Mentor challenge website written in React)"      
        />
        <meta name="keywords" content="Space Tourism, Space Travel, Frontend Mentor, React"/>
        <link rel="icon" href={ logo } />
      </Helmet>
      <App />
    </Router> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
