import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/imports.scss';
import './index.css';
import App from './App';

import { AppProvider } from './store/AppProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <App />
    </AppProvider>
    );