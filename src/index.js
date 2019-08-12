import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider, connect } from 'react-redux';
import { store } from './store/store';
import { mapStateToProps, mapDispatchToProps } from './store/store';

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Router>
        <Provider store={store}>
          <Container />
        </Provider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
