import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  //state hanya bisa di implement di class turunan component
  state={
    person:[
      {name: 'John', age:21},
      {name: 'Doe', age:34},
      {name: 'Jun',age:23}
    ]
  }

  switchNameHandler =(paramterName)=>{
    // this.state.person[0].name = 'John1'; tidak bisa sperti ini jika update state harus dengan syntax setState
    this.setState(
      {person:[
        {name: paramterName, age:25},
        {name:'Badrun', age:34}
    ]})
  }

  switchNameOnChange = (event)=>{ 
    this.setState(
      {person:[
        {name: event.target.value, age:21}, 
        {name: "Badrun", age:34}
      ]}) 
  }

  render() {
    // contoh inline css 
    const style ={
      backgroundColor: 'gray',
      font:'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer'
    }



     return(
     <div className="App">
       <h1>Hi I'am React App</h1>
       <p>this is really works</p>
       {/* ada 2 cara lempar method ke presentation antara
       1. ()=> namafungsi(paramter)
       2.  this.namafungsi.bind(this,paramter)
       bedanya apa kurang tau tapi disarankan menggunakan bind 
       tapi sekilas fungsi 
        1 => namafungsi()
        2 => var namafungsi = obj.namafungsi 
              namafungsi()
              point ke 2 berarti memanggil fungsi sama persis 
              di react saat menggunakan () pada fungsi bakal langsgun ter trigger*/}
       <button style={style} onClick={() => this.switchNameHandler("PAIJO")}>switch name</button> 
       <Person 
          name={this.state.person[0].name} 
          old={this.state.person[1].age}
          ivenklik={this.switchNameHandler.bind(this,"Bejo")}
          ivenOnChange ={this.switchNameOnChange}> [additional from app.js]</Person>
       <Person 
          name={this.state.person[1].name}
          old={this.state.person[1].age}
          ivenklik={()=> this.switchNameHandler("KARYo")}/>
    </div>    
    );
  }
} 

export default App;
