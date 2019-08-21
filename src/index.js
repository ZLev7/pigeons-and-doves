import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MobileApp } from './mobileApp';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider, connect } from 'react-redux';
import { store } from './store/store';
import { mapStateToProps, mapDispatchToProps } from './store/store';
import MediaQuery from 'react-responsive';

const Container = connect(mapStateToProps, mapDispatchToProps)(App);
const MobileAppContainer = connect(mapStateToProps, mapDispatchToProps)(MobileApp);

ReactDOM.render(
    <>
      <MediaQuery query="(max-device-width: 900px)">
        <Router>
          <Provider store={store}>
            <MobileAppContainer />
          </Provider>
        </Router>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 900px)">
        <Router>
          <Provider store={store}>
            <Container />
          </Provider>
        </Router>
      </MediaQuery>
    </>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
