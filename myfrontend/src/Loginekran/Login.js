import React, { Component } from 'react';
import axios from 'axios';
import { Button} from 'reactstrap';
import Adminsayfa from '../Adminsayfa/Adminsayfa';
import  {Route, Link} from 'react-router-dom';
import Havadurumuapp from '../havadurumukullanici/Havadurumuapp';
import Havaloginp from '../havadurumukullanici/Havaloginp';
import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import * as actions from '../actions/index';



//import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
//import Router from 'react-router-dom/Router';
class Login extends Component {
    constructor(props) {
        super(props);
        this.section = React.createRef();
       
        

        this.state = {id:'0', 
        username: '',
        surname: '', 
        password: '', statu: '', kontrol:'', myinput:'', i:'',mydataval:'',hits: null};
        this.state = {  
            posts: [ ],
            //public :havlog:'',
          //  static:string havlog = '',
           idler:[],
         gondervy:[]
            
            
        }

        this.fkont = this.fkont.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange(event) {
        this.setState({ [event.target.name]:event.target.value});
    }   


    handleSubmit(event) {

        alert('Kullanıcı giriş yaptı: ' + this.state.username);
        event.preventDefault();
        this.props.onAuth(this.state.username, this.state.password);
        fetch('http://192.168.1.5:4545/Havadurumuapp', {
            method: 'POST',
            body: JSON.stringify({
                id:this.state.id,
                username: this.state.username,
                password: this.state.password,
               
               
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(function (response) {
                return response.text()
               // return response.json()
            }).then(function (body) {
                console.log(body);
            });
             
         
    }
   

    fkont = () => {
       
        console.log("Giriş yapıldı");  
        console.log("Kullanıcı tanımlandı");
        axios.get('http://localhost:4545/kullanicilar').then(response=>{
            this.setState({posts:response.data});
          console.log(response);
          //statulerin hepsi
          const statuler= this.state.posts.map(post => {
            return post.statu;
        }
        );   
        console.log(statuler);
        //kullanıcıların hepsi
        const kullanicilar= this.state.posts.map(post => {
            return post.username;
        }
        );
        console.log(kullanicilar);
         //sifrelerin hepsi
         const sifreler= this.state.posts.map(post => {
            return post.password;
        }
        );
       //idlerin hepsi
        this.state.idler= this.state.posts.map(post => {
       return post.id;
          });
        console.log(sifreler);
        var t = response.data.length;
        console.log(t);
        console.log(kullanicilar[t]);
        
        for(this.state.i=0; this.state.i<t; this.state.i++){

            if((this.state.username===kullanicilar[this.state.i]&&this.state.password===sifreler[this.state.i])){                
               //console.log("vardır");
               // console.log(statuler[i]);
                if(statuler[this.state.i]==='admin'){
                 
        this.state.kontrol='true';
           console.log(this.state.kontrol);

          /* this.props.history.push({

            pathname:'/adminsayfasi'
           
           }           );*/
  


           this.state.myinput='true';
               
                }
            
            else if(statuler[this.state.i]!=='admin'){
                this.state.kontrol='false';
                this.state.myinput ='false'; 
              this.state.idler[this.state.i]=this.state.i;
              
            /*  this.props.history.push({

                pathname:'/havadurumuapp'
               
    
               });*/

               
               this.state.myinput='false';


   
   
            
               
         
      
     

      
  
             
              /*this.state.posts.map(post => {
                return <Havaloginp username={post.username}></Havaloginp>

            }
            );*/


              //id degerler
             // console.log(this.state.idler[this.state.i]);
             
             
             
            }
        }
        }});
        
    
          
    };
      

    render() { 

        
         //adminsayfa
      const mya=() =>{ return (
    <div>
    <Adminsayfa/>
    </div>
     );}  

             //havaappfunction
             
             const my=() =>{ return (
                <div>
                <Havadurumuapp/>
                </div>
                 );} 
                 
                  
              

        const style = {
            margin: '30px',
            color:'black'
          };     
        return (
<div className="Login">
{this.state.myinput===undefined &&<div>
<h1>Kullanıcı Girişi</h1>
<form onSubmit={this.handleSubmit} >
                <input name="username" value={this.state.username} onChange={this.handleChange} type="text" ref="name" placeholder="K Adı"  />               
                <br></br>
                <br></br>
                <input name="password" value={this.state.password} onChange={this.handleChange} type="password"   ref="password" placeholder="Şifre"/>            
                <br></br>
                <Button style={style} onClick={() => this.fkont()}  type="submit"  color="warning"  value="Submit" >Giriş yap</Button>               
                </form></div>
}            
 {this.state.myinput=== 'true' &&
    <div>{mya()}</div>
  }

  {this.state.myinput=== 'false' &&
  <div>{my()}</div>
   }


  </div>
        );
        
    }

   
}


const mapDispatchToProps = dispatch =>{
    return {
        onAuth:(username, password)=>dispatch(actions.auth(username, password))
    };
        };


export default connect(null, mapDispatchToProps)(Login);
//export default  withRouter(Login);



    
  