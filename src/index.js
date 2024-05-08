import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/mainPage.css';
import './css/questionPage.css';
import './css/resultPage.css';
import App from './App';
import store from './store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);