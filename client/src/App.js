import React from 'react';
import "./style.scss";
import axios from 'axios'
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes';
import { Provider } from 'react-redux'
import store from './reducers/store';

const App = () => {

  const handle = async () => {
    const {data} = await axios.get('/api/auth')
    console.log(data)
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes />
          <button onClick={handle} >Test</button>
        </div>
      </Router>
    </Provider>
  );
};

export default App;