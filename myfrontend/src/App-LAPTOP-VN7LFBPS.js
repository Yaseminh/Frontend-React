
import React, { Component } from 'react';
import './App.css';
//import {BrowserRouter} from 'react-router-dom';
//import { Button} from 'reactstrap';
//import NameForm from './Kullanici/NameForm';
//import Havadurumuapp from './havadurumukullanici/Havadurumuapp';
//import Havadurumuadmin from './havadurumuadmin/Havadurumuadmin';
//import Adminsayfa from './Adminsayfa/Adminsayfa';
import Login from './Loginekran/Login';
//import Auth from './containers/Auth/Auth';
import  {Route, Switch} from 'react-router-dom';
import Havadurumuapp from './havadurumukullanici/Havadurumuapp';
import Adminsayfa from './Adminsayfa/Adminsayfa';
//import NameForm from './Kullanici/NameForm';
//import Havadurumuadmin from './havadurumuadmin/Havadurumuadmin';
//import firebase from 'firebase';
//import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import Facebook from './components/Facebook';

class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
  kont:false,
  };
}

  fkont = () => {

    this.setState({
     kont:true
     });

  }

  render() {
    const stylem = {         
      color:'white'
     };                       

    return (
    
      <div className="App">
    
     { !this.state.kont ? <div>
       
      <h3  style={stylem}>Hava Durumu Panelimize Hoşgeldiniz...</h3>      
      <br/><br/>
      <Route path="/Login/"  component={Login}/>
 
      </div>:<Route path="/Login/" exact component={Login}/>
    
    }
         
      <Switch>
      <Route path="/" component={Login} /> 
      <Route path="/havadurumuapp" component={Havadurumuapp} /> 
      <Route path="/adminsayfasi" component={Adminsayfa} /> 
      </Switch>

      </div>

           
    );
  }
}

export default App;