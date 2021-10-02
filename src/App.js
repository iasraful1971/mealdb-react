import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Notfound from './components/Notfound/Notfound';
import Restaurent from './components/Restaurent/Restaurent';

const App = () => {
    return (
        <div>
            <Router>
                <Nav></Nav>
                <Switch>
                    <Route path="/home">
                         <Home></Home>
                    </Route>
                    <Route path="/our-restaurent">
                        <Restaurent></Restaurent>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/contact">
                        <Contact></Contact>
                    </Route>
                    <Route exact path="">
                        <Notfound></Notfound>
                    </Route>
                    <Route exact path="/">
                       <Home></Home>
                    </Route>
                </Switch>
            </Router>
       
        </div>
    );
};

export default App;