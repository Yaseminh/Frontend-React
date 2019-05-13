import React, { Component } from 'react';
import  {Route} from 'react-router-dom';
import NameForm from '../Kullanici/NameForm';
import './Adminsayfa.css';
//import Havadurumuapp from './havadurumukullanici/Havadurumuapp';
import Havadurumuadmin from '../havadurumuadmin/Havadurumuadmin';
import {Button} from 'reactstrap';
const Adminsayfa =(props) => {
  /*render() {
   const style={
      color:'white'
    };*/
    return (
      <div className="Adminsayfa">
    
        <header>
          <h1>Admin Sayfasına Hoşgeldiniz</h1>
          <nav>
            <ul>
            <li><Button   color="success" ><a  href="/kullaniciekleme">Kullanici Ekleyin</a></Button></li>
            <br></br>
            <li><Button color="success"><a  href="/havadurumuayar">Hava durumu Admin Sayfası</a></Button></li>
            </ul>
          </nav>
        </header>

       <Route path="/havadurumuayar" exact component={Havadurumuadmin}/>
       <Route path="/kullaniciekleme" exact component={NameForm}/>
      </div>
    );
  }


export default Adminsayfa;