
import React from 'react';
import axios from 'axios';


const API_URL = 'https://sample-invoice.herokuapp.com/reset'
class reset extends React.Component{

constructor(){

    super();
    this.state = {
    password:'',
    confirmpassword:''
      
    }
}

componentDidMount() {
const token = this.props.match.params.token;

  this.checkIfValid(token);

}
handleChange = ( { target: { name , value } }) =>{

  this.setState({ [name] : value })
  
  }
  handleSubmit = (event) =>
  {

   event.preventDefault();
   this.newPassword();
  }
  
  newPassword = async () =>
  {
    
    const token = this.props.match.params.token;
  const { data } = await axios.post(`${API_URL}/${token}`, {
   password:this.state.password,
   confirmpassword: this.state.confirmpassword
  
  },{

    withCredentials: true
  });
 
  if(data.result === "Success"){
  
    
    alert(data.message); 
    this.props.history.push("/login");  
  }
  
  else{
  
    alert(data.message);
  }
  
  this.setState({password:'' ,confirmpassword:'' })

  
    }

 checkIfValid = async (token) =>{
  

  const { data} = await axios.get(`${API_URL}/${token}`,{

    withCredentials: true
  });

  if(data.result === "error"){


    alert(data.message); 
    this.props.history.push("/Forget");  
  }

 }
render(){


    return (
        <>
        <div class="login-content">
   <div class="nk-block toggled" id="l-login">
   <form onSubmit={this.handelSubmit}>
       <div class="nk-form">
           
           <div class="input-group mg-t-15">
               <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-key"></i></span>
               <div class="nk-int-st">
               <input type="password" class="form-control" name="password" value={this.state.password} placeholder="Password"  onChange={this.handleChange} />
               </div>
           </div>  
           <div class="input-group mg-t-15">
               <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-key"></i></span>
               <div class="nk-int-st">
               <input type="password" class="form-control" name="confirmpassword" value={this.state.confirmpassword} placeholder="confirmpassword"  onChange={this.handleChange} />
               </div>
           </div>
           
           <button type="Submit" class="btn btn-login btn-success btn-float">Submit <i class="fa fa-arrow-right"></i></button>
       </div>
      
   </form>
   </div>
   </div>
        </>
    )
}

}

export default reset;
