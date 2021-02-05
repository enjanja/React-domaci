import React from 'react';
// import Navbar from '../components/Navbar';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Satanism from './components/pages/Satanism';
import Etymology from './components/pages/Etymology';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
         
          <Route path='/' exact component=
          {Home}
            /> {/* sends home every time we call '/'*/}
         <Route path='/satanism' component={Satanism} />
          <Route path='/etymology' component={Etymology} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
