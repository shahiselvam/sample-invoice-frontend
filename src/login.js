import React from 'react';

import axios from 'axios';

const API_URL1 = 'https://sample-invoice.herokuapp.com/login'
class login extends React.Component{

constructor(){

    super();
    this.state = {

      email:'',
      password: ''
    }
}

handleChange = ( { target: { name , value } }) =>{

  this.setState({ [name] : value })
  
  }
  handelSubmit = (event) =>{

    event.preventDefault();
    this.Login();

  }


  Login = async () =>{
debugger
const { data  } = await axios.post(API_URL1 , {

email:this.state.email,
password:this.state.password

},{

  withCredentials: true
})

if(data.result === "error"){
  alert(data.message);
 

}

else{
  this.setState({email:'', password:''})

  this.props.history.push(`/home`);    

}

  }
render(){


    return (
        <>
                   
        <div class="login-content">
   
   <div class="nk-block toggled" id="l-login">
   <form onSubmit={this.handelSubmit}>
       <div class="nk-form">
           <div class="input-group">
               <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-user"></i></span>
               <div class="nk-int-st">
               <input type="text" class="form-control" name="email" value={this.state.email} placeholder="Email Address" onChange={this.handleChange} />
               </div>
           </div>
           <div class="input-group mg-t-15">
               <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-key"></i></span>
               <div class="nk-int-st">
               <input type="password" class="form-control" name="password" value={this.state.password} placeholder="Password"  onChange={this.handleChange} />
               </div>
           </div>  
           <div class="fm-checkbox">
               <label><input type="checkbox" class="i-checks" /> <i></i> Keep me signed in</label>
           </div>
           <button type="Submit" class="btn btn-login btn-success btn-float">Submit <i class="fa fa-arrow-right"></i></button>
       </div>
       <div class="nk-navigation rg-ic-stl">
                <a href="/Registration" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i class="fa fa-arrow-right"></i> <span>Register</span></a>
                <a href="/Forget" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i class="fa fa-question" aria-hidden="true"></i> <span>Forgot Password</span></a>
            </div>
   </form>
   </div>
   </div>
        </>
    )
}

}

export default login;
