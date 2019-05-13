import React, { Component } from 'react';
import axios from 'axios';
import Havadurumusehir from './Havadurumusehir';
import { Button,Table} from 'reactstrap';
class Havadurumuadmin extends Component {
    constructor(props) {
        super(props);
        this.state = {id:'0', sehir: ''};
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
        axios.get('http://localhost:4545/sehirler').then(response=>{
          this.setState({posts:response.data});
        console.log(response);
        console.log(this.section);
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

        this.setState({
            datas:this.state.posts
            });

        console.log(this.state.datas[i]);
        alert('Şehir silindi: ' + this.state.datas[i].sehir);
        fetch('http://192.168.1.5:4545/sehirim', {
            method: 'POST',
            body: JSON.stringify({
                sehir:this.state.posts[i].sehir                
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
            this.setState({
            mydata:mydata
            });
      }
      fEdit = (i) => {
        let data = this.state.posts[i];
        console.log(data.sehir);
        alert('Şehir günceleniyor: ' + data.sehir);
        fetch('http://192.168.1.5:4545/sehirgun', {
            method: 'POST',
            body: JSON.stringify({
                sehir:data.sehir,
            }),
            headers: { "Content-Type": "application/json" }
        })
        .then(function (response) {
            return response.json()
        }).then(function (body) {
            console.log(body);
          
        });
        this.refs.sehir.value = data.sehir;
        this.setState({
         act:1,
         index:i
        });         
    };
//sehirleri ekleme
    handleSubmit(event) {
            alert('Şehir eklendi: ' + this.state.sehir);
            event.preventDefault();
            fetch('http://192.168.1.5:4545/sehir', {
                method: 'POST',
                body: JSON.stringify({
                    id: this.state.id+1,
                    sehir: this.state.sehir 
                }),
                headers: { "Content-Type": "application/json" }
            })
                .then(function (response) {
                    return response.json()
                }).then(function (body) {
                    console.log(body);
             });                
               let datas = this.state.posts;             
        if(this.state.act===0){
            let data = {
                 sehir: this.state.sehir               
             }
             datas.push(data);
        }else{
           let index = this.state.index;
           datas[index].sehir=this.state.sehir;
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
    return <Havadurumusehir id={post.id} key={post.id} sehir={post.sehir} />
}
);       
        return (
<div>
           <form onSubmit={this.handleSubmit}  >
                <input name="sehir" value={this.state.sehir} onChange={this.handleChange} type="text" ref="sehir" placeholder="Şehir"  />                         
                <Button style={style} type="submit"  color="success"  value="Submit" >Şehir Ekle</Button>
            </form>      
            <h1>Eklenen Şehirler</h1>
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
              <Button className="myButtonum"  color="danger"   onClick={() => this.fDelete(i)} >Şehiri Sil</Button>
              <Button className="myButton"   color="warning"  onClick={() => this.fEdit(i)} >Şehiri Düzenle</Button>
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

export default Havadurumuadmin;