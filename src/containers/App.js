import React,{Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
  //state hanya bisa di implement di class turunan component
  //component yang ada state dimanakan container 
  //statefull artinya sebuah component yang memiliki state
  state={
    person:[
      {id: "asd1" ,name: 'John', age:21},
      {id: "daf4" ,name: 'Doe', age:34},
      {id: "fsf2" ,name: 'Jun',age:23}
    ],
    hideNShowPerson : false
  }

  switchNameHandler =(paramterName)=>{
    // this.state.person[0].name = 'John1'; tidak bisa sperti ini jika update state harus dengan syntax setState
    this.setState(
      {person:[
        {name: paramterName, age:25},
        {name:'Badrun', age:34}
    ]})
  }

  switchNameOnChange = (event,paramId)=>{  
    const indexPerson = this.state.person.findIndex(x=> {
                      return  x.id=== paramId  })
    
    const dtPerson = {...this.state.person[indexPerson]};

    dtPerson.name =event.target.value; 

    const ltNewPerson = [...this.state.person]
    ltNewPerson[indexPerson] = dtPerson;
      
    this.setState({person: ltNewPerson})
  }

  hideNShowPersonDiv = ()=>{
    const doesShow = this.state.hideNShowPerson; 
    this.setState({hideNShowPerson : !doesShow});
  }

  deleteStateHandler =(paramIndex)=>{
    
    // const newStatePerson = this.state.person //menggunakan cara seperti ini tidak best practice karena masih reference dengan file aslinya
    const newStatePerson = [...this.state.person] // ini adalah best practice menghilangkan refrences dengan original nya
    console.log("Original",this.state.person)
    console.log("before",newStatePerson)
    //fungsi splice untuk cut dari (index ke , sebnyak )
    // misal a,b,c,d => (1,1) => b hilang =acd
    // misal a,b,c,d => (1,2) => bc hilang = ad
    newStatePerson.splice(paramIndex, 1);
    this.setState({person : newStatePerson})
    console.log("after",this.state.person)
  }

  render() { 
    // best practice untuk property di masukkan ke variabelan\
    let personProperty = null;

    if (this.state.hideNShowPerson){
      personProperty =  <Persons 
                            person = {this.state.person}
                            ivenklik = {this.deleteStateHandler}
                            ivenOnChange ={this.switchNameOnChange} />  ;
    }
 
     return( 
        <div className={classes.APP}>
          <Cockpit
          hideNShowPerson = {this.state.hideNShowPerson}
          person = {this.state.person}
          hideNShowPersonDiv = {this.hideNShowPersonDiv}
          />
          {personProperty} 
        </div>   
    );
  }
} 

export default App;
