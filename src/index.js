import React from 'react';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import logo from 'assets/shared/logo.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/space-tourism">
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

