import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App';
import './Styles/Styles.css';
import {Provider} from 'react-redux'
import store from './Redux/store'
import './Styles/App.css'
import './Styles/Styles.css'

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
