import React from 'react';
import { Switch,Route,Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contect from './Contect';
import Service from './Service';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

const App =() =>{
    return (<>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contect" component={Contect}/>
            <Route exact path="/service" component={Service}/>
            <Redirect to="/"/>
        </Switch>
        <Footer/>
    </>);
}

export default App;