import React from 'react'
import './Person.css'
import Radium from 'radium'

const person =(param)=>{
    let styles ={        
            '@media (min-width:500px)' :{
                 width:'450px'
                }
    }
    // component yang berupa fungsi biasnya dinamakan presentation
    // dan dinamakan stateless karena tidak mengimplemntasi state karena state hnnya bisa ditaruh di class turununan component
    // console.log(param)
    return (
        // className itu dari fungsi react untuk memanggil css class nya
        <div className="Person" style={styles}>
            <p onClick={param.ivenklik}> This Is from person.js and my Name is <b>{param.name}</b> and i'am {param.old} years old</p>
            <p>{param.children}</p>
            {/* param childern berarti sebuah fungsi yang mengambil antara tag pemanggilnya <Person>children ambil disini</Person> */}
            <input type="text" onChange={param.ivenOnChange} value={param.name}></input>{/* maksutnya pada saat change value juga ikut berubah di dalam text box */}
        </div>
    )
}

export default Radium(person);