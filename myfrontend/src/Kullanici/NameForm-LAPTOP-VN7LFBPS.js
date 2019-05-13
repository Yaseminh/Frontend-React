import React, { Component } from 'react';
import axios from 'axios';
import Nameformpost from './Nameformpost';
import './Nameform.css';
import { Button, Table} from 'reactstrap';
class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'0', username: '', surname: '', password: '', statu: ''};
        this.state={act:0, index:''}
      this.state = {  
            posts: [   
            ],
            datas:[],
            sildata:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.fRemove = this.fRemove.bind(this);
    } 
    componentDidMount(){
        axios.get('http://localhost:4545/kullanicilar').then(response=>{
          this.setState({posts:response.data});
        console.log(response);
      });
      }
    handleChange(event) {
        this.setState({ [event.target.name]:event.target.value});
    }
    /*fEdit = (i) => {
        let data = this.state.posts[i];

        console.log(data.username);
        alert('Kullanıcı güncelendi: ' + data.username);

        fetch('http://192.168.1.5:4545/kullanicigun', {
            method: 'POST',
            body: JSON.stringify({
                username:data.username,
                surname:data.surname,
                password:data.password,
                statu:data.statu
                
            }),
            headers: { "Content-Type": "application/json" }
        })
        .then(function (response) {
            return response.json()
        }).then(function (body) {
            console.log(body);
          
        });
        this.refs.name.value = data.username;
        this.refs.surname.value = data.surname;
        this.refs.password.value = data.password;
        this.refs.statu.value = data.statu;
          
    };*/

    //kullanicisilme
    fDelete = (i) => {
      //sonra aç bunu set state ekle düzelt  this.state.datas = this.state.posts;
        console.log(this.state.datas[i]);
        alert('Kullanıcı silindi: ' + this.state.datas[i].username);

        fetch('http://192.168.1.5:4545/kullanicim', {
            method: 'POST',
            body: JSON.stringify({
                username:this.state.posts[i].username,
                surname:this.state.posts[i].surname,
                password:this.state.posts[i].username,
                statu:this.state.posts[i].statu
                
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(function (response) {
                return response.json()
            }).then(function (body) {
                console.log(body);
              
            });

            let mydata = this.state.datas;
            this.state.datas.splice(i,1);
            
           // this.refs.lastname.surname = data.lastname;
            //this.refs.number.sifre= data.number;
           // this.refs.select.statu = data.select;
            this.setState({
            mydata:mydata
            });

      }
      fEdit = (i) => {
        let data = this.state.posts[i];

        console.log(data.username);
        alert('Kullanıcı günceleniyor: ' + data.username);

        fetch('http://192.168.1.5:4545/kullanicigun', {
            method: 'POST',
            body: JSON.stringify({
                username:data.username,
                surname:data.surname,
                password:data.password,
                statu:data.statu
                
            }),
            headers: { "Content-Type": "application/json" }
        })
        .then(function (response) {
            return response.json()
        }).then(function (body) {
            console.log(body);
          
        });
        this.refs.name.value = data.username;
        this.refs.surname.value = data.surname;
        this.refs.password.value = data.password;
        this.refs.statu.value = data.statu;

        this.setState({
         act:1,
         index:i
        });
          
    };

//kullanicilari ekleme
    handleSubmit(event) {

            alert('Kullanıcı eklendi: ' + this.state.username);
            event.preventDefault();
            fetch('http://192.168.1.5:4545/kullanici', {
                method: 'POST',
                body: JSON.stringify({
                   // id: this.state.id+1,
                    username: this.state.username,
                    surname: this.state.surname,
                    password: this.state.password,
                    statu: this.state.statu
                   
                }),
                headers: { "Content-Type": "application/json" }
            })
                .then(function (response) {
                    return response.json()
                }).then(function (body) {
                    console.log(body);
                });
                 
                console.log(this.state.posts);
        let datas = this.state.posts;
              
        if(this.state.act===0){
            let data = {
                username: this.state.username,
                 surname:this.state.surname,
                 password:this.state.password,
                 statu:this.state.statu
             }
             datas.push(data);
        }else{
        
          /* let index = this.state.index;
           datas[index].username=this.state.username;
           datas[index].surname=this.state.surname;
           datas[index].password=this.state.password;
           datas[index].statu=this.state.statu;

           console.log(index);*/
        }
              
                this.setState({
                posts:datas,
                act:0
                });
        }
       
    render() {
        
        const style = {
            margin: '30px'
          };
          
const posts= this.state.posts.map(post => {
    return <Nameformpost id={post.id} key={post.id} username={post.username} surname={post.surname} password={post.password} statu={post.statu} />
}
);       
        return (
<div>

            <form onSubmit={this.handleSubmit}  >
                <input name="username" value={this.state.username} onChange={this.handleChange} type="text" ref="name" placeholder="İsim"  />               
                <input name="surname" value={this.state.surname} onChange={this.handleChange} type="text"   ref="surname" placeholder="Soyad"  />
                <input name="password" value={this.state.password} onChange={this.handleChange} type="password"   ref="password" placeholder="Şifre"/>
                <input name="statu" value={this.state.statu} onChange={this.handleChange} type="text"  ref="statu" placeholder="statu"  />              
                <Button style={style} type="submit"  color="success"  value="Submit" >Kullanıcı Ekle</Button>
            </form>
      
            <h1>Eklenen Kullanıcılar</h1>
            <Table>
        <thead>
          <tr>
            <th>Bilgiler</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
  
            <td> {posts}</td>
            <td>
            <pre>
          {posts.map((data, i) =>
            <p key={i} className="myList">
             
               {i + 1}.
              <Button className="myButtonum"  color="danger"   onClick={() => this.fDelete(i)} >Kullanıcı Sil</Button>
              <Button className="myButton"   color="warning"  onClick={() => this.fEdit(i)} >Kullanıcı Düzenle</Button>
            </p>
          )}
        </pre> 

            </td>
          </tr>
        </tbody>
      </Table>

               </div>
        );
    }
}

export default NameForm;