import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

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
    const existValue = this.state.hideNShowPerson; 
    this.setState({hideNShowPerson : !existValue});
  }

  deleteStateHandler =(paramIndex,event)=>{
    debugger
    // const newStatePerson = this.state.person //menggunakan cara seperti ini tidak best practice karena masih reference dengan file aslinya
    const newStatePerson = [...this.state.person] // ini adalah best practice menghilangkan refrences dengan original nya
    console.log(newStatePerson)
    //fungsi splice untuk cut dari (index ke , sebnyak )
    // misal a,b,c,d => (1,1) => b hilang =acd
    // misal a,b,c,d => (1,2) => bc hilang = ad
    newStatePerson.splice(paramIndex, 1);
    this.setState({person : newStatePerson})
    console.log("after",this.state.person)
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

    // best practice untuk property di masukkan ke variabelan\
    let personProperty = null;

    if (this.state.hideNShowPerson){
      personProperty =(
        <div>
          {this.state.person.map((x,iterartion)=> {
           return  <Person 
                      name={x.name} 
                      old={x.age}
                      ivenklik={this.deleteStateHandler.bind(this,iterartion)}
                      // ivenklik={this.switchNameHandler.bind(this,"Bejo")}
                      ivenOnChange ={(eventMoment)=>this.switchNameOnChange(eventMoment,x.id)}
                      key={x.id}> [additional from app.js]
                      </Person>
          })}
        </div>
      )
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
              
       {/* <button style={style} onClick={() => this.switchNameHandler("PAIJO")}>switch name</button>  */}

       <button style={style} onClick={this.hideNShowPersonDiv}>switch name</button> 
       
        {personProperty}
        
    </div>    
    );
  }
} 

export default App;
