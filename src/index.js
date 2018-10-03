import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import './styles/styles.css';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
