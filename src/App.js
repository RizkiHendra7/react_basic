import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot } from 'radium'; 
import TryCatch from './TryCatch/TryCatch';

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
    // contoh inline css 
    const style ={
      backgroundColor: 'green',
      color: 'white',
      font:'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer',
      ':hover':{ //hover property punya radium
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    }

    // best practice untuk property di masukkan ke variabelan\
    let personProperty = null;

    if (this.state.hideNShowPerson){
      personProperty =(
        <div>
          {this.state.person.map((x,iterartion)=> {
           return  <TryCatch key={x.id}>
                      <Person 
                        name={x.name} 
                        old={x.age}
                        ivenklik={this.deleteStateHandler.bind(this,iterartion)}
                        // ivenklik={this.switchNameHandler.bind(this,"Bejo")}
                        ivenOnChange ={(eventMoment)=>this.switchNameOnChange(eventMoment,x.id)}
                        > [additional from app.js]
                      </Person>
                  </TryCatch> 
           
          })}
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    //buta dinamic style 
    let clases = [];

    if(this.state.person.length<=2){
      clases.push('red') //class="red"
    }
    if(this.state.person.length<=1){
      clases.push('bold') //class = 'bold red'
    }
   

     return(
       <StyleRoot>{/*dibuat style root terkait media css di person.js yang membutuhkan div dibungku style root  */}
          <div className="App">
            <h1>Hi I'am React App</h1>
            <p className={clases.join(' ')}>this is really works</p>{/*ditambhakan join agar join array ke string dengan separator spasi */}
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
    </StyleRoot>
    );
  }
} 

export default Radium(App);
