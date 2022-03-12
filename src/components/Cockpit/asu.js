import React from 'react'; 
import classes from './Cockpit.css'

const asu =(param) => {
  //buta dinamic style 
  let assignedClasses = []; 
  let btnClass = '';

  if (param.hideNShowPerson){ 
    btnClass = classes.Red;
  } 
  if(param.person.length<=2){
    assignedClasses.push(classes.red) //class="red"
  }
  if(param.person.length<=1){
    assignedClasses.push(classes.bold) //class = 'bold red'
  } 
 let aaa = classes.Red
  let sss = classes.red
  let xxx = classes.Cockpit;


    return(
      <div className={classes.Cockpit}>
            <h1>Hi I'am React App</h1>
            <p className={assignedClasses.join(' ')}>this is really works</p>{/*ditambhakan join agar join array ke string dengan separator spasi */}
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

            <button 
            className={btnClass} 
            onClick={param.hideNShowPersonDiv}>switch name</button> 
        </div>

        
    );
}

export default asu;