import React from 'react'
import './Person.css'

const person =(param)=>{
    // console.log(param)
    return (
        // className itu dari fungsi react untuk memanggil css class nya
        <div className="Person">
            <p onClick={param.ivenklik}> This Is from person.js and my Name is <b>{param.name}</b> and i'am {param.old} years old</p>
            <p>{param.children}</p>
            {/* param childern berarti sebuah fungsi yang mengambil antara tag pemanggilnya <Person>children ambil disini</Person> */}
            <input type="text" onChange={param.ivenOnChange} value={param.name}></input>{/* maksutnya pada saat change value juga ikut berubah di dalam text box */}
        </div>
    )
}

export default person;