import React from 'react';
import "./style.scss";
import Navbar from 'src/components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from '../Routes';
import { Provider } from 'react-redux'
import store from 'src/redux/store';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const App = () => {

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <div className='container'>
            <Routes />
          </div>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;