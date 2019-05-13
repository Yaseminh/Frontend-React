import React, { Component } from 'react';
import Havadurumu from '../havadurumukullanici/Havadurumu';
import axios from 'axios';
import { Button} from 'reactstrap';
import Havagoster from '../havadurumukullanici/Havagoster';
import Login from '../Loginekran/Login';
import Havaloginp from '../havadurumukullanici/Havaloginp';


class Havadurumuapp extends Component {
  constructor(props) {
    super(props);
 this.state = {  
    posts: [   
    ],
    ipadress:[],
    havavalue:[],
    gonder:[],
    otherState: 'some other value',
    showHavadurumlari: false,
    adress:[],
    sehirref:[],
  
  }
  


}
  componentDidMount(){


    /*axios.get('http://api.openweathermap.org/data/2.5/weather?q=Bolu&APPID=d08425b8a15c62dce943588c22abbdfd').then(response=>{
    //  this.setState({havavalue:response.data});
   //console.log(response.data);
   //console.log(response.data.name);
   //console.log(response.data.main.temp);
   //console.log(response.data.wind.speed);
  
  });*/

 /* axios.get(this.state.adress).then(response=>{
   
    console.log(response.data);
  
  });*/
    
  /*axios.get('http://localhost:3000/havadurumuapp/jkll#submit').then(response=>{
  console.log(response.data);
  });*/

    axios.get('http://localhost:4545/sehirler').then(response=>{
      this.setState({posts:response.data});
   // console.log(response);
   // console.log(response.data.sehir);
   // console.log(response.data.length);
   var i;
   for(i=0;i<response.data.length; i++){
    this.state.adress[i]= "'http://api.openweathermap.org/data/2.5/weather?q="+response.data[i].sehir+"&APPID=d08425b8a15c62dce943588c22abbdfd'";
   //console.log(this.state.adress[i]);
   
    this.state.sehirref[i]= response.data[i].sehir;
   }
  });
//ip adresi
  axios.get('https://api.ipify.org?format=json').then(response=>{
    
  console.log(response.data);
  this.setState({ipadress:response.data});
 
});



 /* var t;
  for(t=0;t<2; t++){

  axios.get(this.state.adress[t]).then(response=>{
   
    console.log(response.data);
  
  });
  }*/


  }
  
  nameChangedHandler = ( event, id ) => {
    const havadurumuIndex = this.state.posts.findIndex(p => {
      return p.id === id;
    });
    const havadurumu = {
      ...this.state.posts[havadurumuIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    havadurumu.title = event.target.value;
    const posts = [...this.state.posts];
    posts[havadurumuIndex] = havadurumu;
    this.setState( {posts: posts} );
  }
  deletePersonHandler = (havadurumuIndex) => {
    // const persons = this.state.persons.slice();
    const posts = [...this.state.posts];
    posts.splice(havadurumuIndex, 1);
    this.togglePersonsHandler();
    this.setState({posts: posts} );

    //sorgulama yapılan tarih
    var d = new Date();
    console.log(d);

    //sorgulama lokasyonu
    console.log(this.state.posts[havadurumuIndex].sehir);
    
    //ip adress göster
    console.log(this.state.ipadress);

    //gecen zaman
    d /= 1000;
  var seconds = Math.round(d);
  console.log(seconds + " seconds");

  

  //sorgulayan kullaniciid
  //var logindeger = new Login();
 
     
   // console.log(logindeger);

  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showHavadurumlari;
    this.setState( { showHavadurumlari: !doesShow } );
  }

 
/*postDataHandler =()=>{
  const data ={
      ipadress:this.state.ipadress
  };
  axios.post('http://192.168.1.8:4545/havadurumuapp', data)
  .then(response=>{
    console.log(response);
  })
  ;
}*/

/*componentWillMount(){
  axios.post('http://192.168.1.8:4545/havadurumuapp', this.state.ipadress)
  .then(response=>{
    console.log(response);
  })
}*/




  render () {
    const style = {
      width:'700px',
    };  
  
  
  
   /*const havavalue= this.state.havavalue.map(gospost => {
      return <Havagoster id={gospost.id} key={gospost.id} name={gospost.name} />
  }
  ); */
  
 




    let posts = null;
    if ( this.state.showHavadurumlari ) {
      posts = (
        <div>
          {this.state.posts.map((havadurumu, index) => {
            return <Havadurumu
              click={() => this.deletePersonHandler(index)}
              sehir={havadurumu.sehir}               
              key={havadurumu.id}
              changed={(event) => this.nameChangedHandler(event, havadurumu.id)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
      <img src={require('../havadurumukullanici/havadurumuresimm.jpg')} />
        <h1>Hava Durumu Sayfasına Hoşgeldiniz...</h1>
        <p>Alttan Şehiri seçiniz..</p>  
        <Button  color="success"
          style={style}
          onClick={this.togglePersonsHandler}  >Şehir Seçiniz..</Button>
          {posts}       
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
  }


  
export default Havadurumuapp;