import React, { Component } from 'react';
import  {Route, Link} from 'react-router-dom';
import NameForm from '../Kullanici/NameForm';
import './Adminsayfa.css';
//import Havadurumuapp from './havadurumukullanici/Havadurumuapp';
import Havadurumuadmin from '../havadurumuadmin/Havadurumuadmin';
//import {Button} from 'reactstrap';
class Adminsayfa extends Component{
  constructor(props) {
    super(props);
  this.state = {myknt:''};

  }

  
  render() { 

    const style = {
      textDecorationLine:'none',
      fontSize:'18px'
    };
      
      

    return (
      <div className="Adminsayfa">
           
    
      <br/><br/>
      

        <header>
          <h1>Admin Sayfasına Hoşgeldiniz</h1>
         
          <nav>
            <li ><Link style={style} to="/kullaniciekle">Kullanıcı Ekle</Link></li>
            <li><Link style={style} to={{
              pathname:'/sehirekle',
              hash:'#submit',
              search:'?quick-submit=true'
            }}>Şehir Ekle</Link></li>
          </nav>
        </header>
        <Route path="/kullaniciekle" component={NameForm}/>
        <Route path="/sehirekle" component={Havadurumuadmin}/>

      </div>
    );

  }
}



export default Adminsayfa;