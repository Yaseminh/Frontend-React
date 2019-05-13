import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
//import NameForm from './Kullanici/NameForm';
//import Havadurumuapp from './havadurumukullanici/Havadurumuapp';
//import Havadurumuadmin from './havadurumuadmin/Havadurumuadmin';
//import Adminsayfa from './Adminsayfa/Adminsayfa';
import Login from './Loginekran/Login';
import Auth from './containers/Auth/Auth';
import  {Route, Switch, Link} from 'react-router-dom';
import Havadurumuapp from './havadurumukullanici/Havadurumuapp';
import Adminsayfa from './Adminsayfa/Adminsayfa';
class App extends Component {
  render() {
    return (
    
      <div className="App">
      <Login/>
      <Switch>
      <Route path="/" exact Component={Login} /> 
      <Route path="/havadurumuapp" Component={Havadurumuapp} /> 
      <Route path="/adminsayfasi" Component={Adminsayfa} /> 
      </Switch>
         
      </div>
      
    );
  }
}

export default App;
