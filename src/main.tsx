import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider as ReactReduxProvider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <ReactReduxProvider store={store}>
            <App />
        </ReactReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
