import React,{Component} from 'react'

class TryCatch extends Component {

    state = {
        hasError: false,
        errorMessage:''
    }

    componentTryCatch = (paramBitError, paramErrorMessage)=>{
        this.setState({haserror : paramBitError, errorMessage : paramErrorMessage})
    }

    render (){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children;
        } 
    }

}

export default TryCatch;