import React from 'react';
import axios from 'axios';

const API_URL = 'https://sample-invoice.herokuapp.com/registration';

class Registration extends React.Component{

constructor(){


    super();

    this.state={

       
        FirstName:'',
        LastName:'',
        email: '',
        password: '',
        confirmpassword: '',
        role:'manager'
    
    
        
    }
}
handleChange = ( { target: { name , value } }) =>{

    this.setState({ [name] : value })
    
    }
    handelSubmit = (event) =>{

      event.preventDefault();
      
      this.createUser();
    }
    
    createUser = async () => {

    const { data } = await axios.post(API_URL , {
    
      FirstName:this.state.FirstName,
      LastName:this.state.LastName,
      email : this.state.email,
      password: this.state.password,
      confirmpassword : this.state.confirmpassword,
      role:this.state.role
    },{

        withCredentials: true
      })
    
    if(data.result === "success"){
    
      alert(data.message);
    }
    
    else{
    
      alert(data.message);
    }
    
    
    this.setState({FirstName:'' ,LastName:'' , email : '' , password: '', confirmpassword: ''})
    
    }

    render(){

        return(
            <>
     <div class="login-content">
        <div class="nk-block toggled" id="Registration#l-register">
            <form onSubmit={this.handelSubmit}>
            <div class="nk-form">
                <div class="input-group">
                    <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-user"></i></span>
                    <div class="nk-int-st">
                        <input type="text" class="form-control" name="FirstName" value={this.state.FirstName} placeholder="First Name" onChange={this.handleChange} />
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-user"></i></span>
                    <div class="nk-int-st">
                        <input type="text" class="form-control" name="LastName" value={this.state.LastName} placeholder="Last Name"  onChange={this.handleChange} />
                    </div>
                </div>

                <div class="input-group mg-t-15">
                    <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-envelope"></i></span>
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

                <div class="input-group mg-t-15">
                    <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-key"></i></span>
                    <div class="nk-int-st">
                        <input type="password" class="form-control" name="confirmpassword" value={this.state.confirmpassword} placeholder="Confirm Password" onChange={this.handleChange} />
                    </div>
                </div>
<button type="Submit" class="btn btn-login btn-success btn-float">Submit <i class="fa fa-arrow-right"></i></button>
                
            </div>
            </form>
            <div class="nk-navigation rg-ic-stl">
                <a href="/login" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i class="fa fa-arrow-right"></i> <span>Login</span></a>
                <a href="/Forget" data-ma-action="nk-login-switch" data-ma-block="#l-forget-password"><i class="fa fa-question" aria-hidden="true"></i> <span>Forgot Password</span></a>
            </div>
        </div>


        
    </div>
            </>
        )
    }

}


export default Registration;
