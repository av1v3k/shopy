import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { headerReducer, productReducer, cartReducer } from './reducers';
import './index.css';
import App from './App';


const store = createStore(
    combineReducers({
        headerReducer,
        productReducer,
        cartReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);