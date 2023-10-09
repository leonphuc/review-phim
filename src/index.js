import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import reportWebVitals from './reportWebVitals';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <UserProvider>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </UserProvider>
        </React.StrictMode>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
