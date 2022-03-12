import React from "react"; 
import Person from "./Person/Person"


const Persons = (param) =>  param.person.map((x,iterartion)=> {
        return  <Person 
                    key={x.id}
                    name={x.name} 
                    old={x.age}
                    ivenklik={param.ivenklik.bind(this,iterartion)} 
                    ivenOnChange ={(eventMoment)=>param.ivenOnChange(eventMoment,x.id)}> [additional from app.js]
                </Person> 
})
  

export default Persons;
