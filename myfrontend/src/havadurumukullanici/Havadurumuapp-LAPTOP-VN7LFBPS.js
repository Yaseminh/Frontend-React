import React, { Component } from 'react';
import Havadurumu from '../havadurumukullanici/Havadurumu';
import axios from 'axios';
import { Button } from 'reactstrap';
//import Havagoster from '../havadurumukullanici/Havagoster';
import Login from '../Loginekran/Login';
//import Havaloginp from '../havadurumukullanici/Havaloginp'; 
import  {Route, Link} from 'react-router-dom';
//const my = {}
//var static  = '';
class Havadurumuapp extends Component {
  //my = new Object();
  //static my = '';


  constructor(props) {
    super(props);

    this.state = {
      myinput:'',
     
      posts: [
      ],

      postarama:[],
      postkul:[],      
      login: [],
      ipadress: [],
      havavalue: [],
     seconds:[],
     kulid:[],
    

      havavaluealt: [],
      gonder: [],
      otherState: 'some other value',
      showHavadurumlari: false,
      showHavaSorgulari:false,
      adress: [],
      sehirref: [],
      myuser: [],
      t: [],
      c:[],

      deneme:[],

      

    }



  }
  componentDidMount() {

//aramagecmisikullanıcılar
axios.get('http://localhost:4545/kullanicilar').then(response => {
  this.setState({ postkul: response.data });

});

    axios.get('http://localhost:4545/sehirler').then(response => {
      this.setState({ posts: response.data });
        
    });
    //ip adresi
    axios.get('https://api.ipify.org?format=json').then(response => {

      console.log(response.data);
      this.setState({ ipadress: response.data });

    });

  }

  nameChangedHandler = (event, id) => {
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
    this.setState({ posts: posts });
  }
  deletePersonHandler = (havadurumuIndex) => {
    // const persons = this.state.persons.slice();
    const posts = [...this.state.posts];
    // posts.splice(havadurumuIndex, 1);
    this.togglePersonsHandler();
    this.setState({ posts: posts });

    //sorgulama yapılan tarih
    var d = new Date();
    console.log(d);

    //sorgulama lokasyonu
    console.log(this.state.posts[havadurumuIndex].sehir);


//anadata
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.posts[havadurumuIndex].sehir + "&APPID=d08425b8a15c62dce943588c22abbdfd&units=metric").then(response => {
      this.setState({ havavalue: response.data });

      console.log(this.state.havavalue);
    });

//aldatamain
axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.state.posts[havadurumuIndex].sehir + "&APPID=d08425b8a15c62dce943588c22abbdfd&units=metric").then(response => {
  this.setState({ havavaluealt: response.data.main });

  console.log(this.state.havavalue);
});

    //ip adress göster
    console.log(this.state.ipadress);
    //gecen zaman
    d /= 1000;

    this.setState({
      seconds:Math.round(d)
      });

   // this.state.seconds = Math.round(d);
    console.log(this.state.seconds + " seconds");

    //sorgulayan kullaniciid
    this.setState({
      kulid:localStorage.getItem('normalid')
      });


//this.state.kulid = localStorage.getItem('normalid');
console.log(this.state.kulid);

const kullanicisorgu = {
  ip:this.state.ipadress,
  seconds:this.state.seconds,
  retrievednormid:localStorage.getItem('normalid'),
  sorgusehir:this.state.posts[havadurumuIndex].sehir
}



axios.post('http://192.168.1.5:4545/KulHavadurumuapp', kullanicisorgu);





    // var logindeger = new Login();
    //   console.log(logindeger);

    axios.get('http://localhost:4545/loginden').then(response => {
      this.setState({ login: response.data });
      console.log(response);

      //user hepsi
      this.setState({
        myuser:this.state.login.map(post => {
          return post.username;
        }
        )
        });

      
    });
   
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showHavadurumlari;
    this.setState({ showHavadurumlari: !doesShow });
  }

  clicklogret = () => {
    this.setState({
      myinput:'true'
      });
  }


  clicksehirsorgu = () => {

//aramagecmisidegerler
axios.get('http://localhost:4545/kullanicilarhava').then(response => {
  this.setState({ postarama: response.data });

  const doesShow = this.state.showHavaSorgulari;
  this.setState({ showHavaSorgulari: !doesShow });

  for(this.state.c=0;this.state.c<this.state.postarama.length;this.state.c++){
    if (this.state.postarama[this.state.c].kulid===sessionStorage.getItem('normalid')){
  
            //sorgulanansehirler
            //  console.log(this.state.postarama[this.state.c].sorgusehir);                       
        this.state.postarama.push(this.state.postarama[this.state.c].sorgusehir);     
 
    }
    }


 
});
  }

  render() {
    const myItems = [];
   
   for(this.state.c=0;this.state.c<this.state.postarama.length;this.state.c++){
    if (this.state.postarama[this.state.c].kulid===sessionStorage.getItem('normalid')){
 
            //sorgulanansehirler
            //  console.log(this.state.postarama[this.state.c].sorgusehir);  

      myItems.push(this.state.postarama[this.state.c].sorgusehir+',');
      console.log(myItems);
    // this.state.postarama.push(this.state.postarama[this.state.c].sorgusehir);                 
 
    }
    }

    const myklog=() =>{ return (
      <div>
      <Login/>
      </div>
       );}  


    const style = {
      width: '50%',
    };



    const style2 = {
      position: 'absolute',

      left: '75%'
    };

    const mystyle = {
      position: 'absolute',

     
      margin: '5%'
    };

    const mstyle = {
      color:'white'
    };

    let posts = null;
    if (this.state.showHavadurumlari) {
      posts = (
        <div>
          {this.state.posts.map((havadurumu, index) => {
            return <Havadurumu
              click={() => this.deletePersonHandler(index)}
              sehir={havadurumu.sehir}
              key={index}
              changed={(event) => this.nameChangedHandler(event, havadurumu.id)} />
          })}
        </div>
      );
    }

    return (

      <div>
        <Button   onClick={this.clicklogret}   style={style2} color="success"> <Link style={mstyle}  to="/">Çıkış Yap</Link></Button>
      
       {this.state.myinput=== 'true'?
    <div>{myklog()}</div> :
    <div>

    <br/><br/>
        <Button     onClick={this.clicksehirsorgu} style={style2} color="success">Arama Geçmişim</Button>  
       
        {this.state.showHavaSorgulari===true?
        <div>
       <ul> 

<br/><br/>
<h1>Aramalarım...</h1>
              <div >
           {myItems}
              </div>
      
      </ul>
       </div>: null
    }

        <img className="img-fluid" alt="" src={require('../havadurumukullanici/havadurumuresimm.jpg')} />
        <h1>Hava Durumu Sayfasına Hoşgeldiniz..</h1>
        {this.state.havavalue === undefined || this.state.havavalue.name === undefined ?  <div>

</div> :
  <div  style={mystyle}>
  <br/><br/><br/>
    <label><b>Şehir:</b> {console.log(this.state.havavalue.name)  } :{this.state.havavalue.name}</label>
    <br/>
    <label><b>Base:</b> {this.state.havavalue.base}</label>
    <br/>
    <label><b>Derece:</b> {this.state.havavaluealt.temp}</label>
  </div>
}
  
        <p>Alttan Sorgulatmak İstediğiniz Şehiri seçiniz..</p>       
        <Button color="success"
          style={style}
          onClick={this.togglePersonsHandler}  >Şehir Seçiniz..</Button>
        {posts}


    </div>

  }

             <Route path="/" />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}


export default Havadurumuapp;



