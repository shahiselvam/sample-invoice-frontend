
import React from 'react';
import axios from 'axios';

const API_URL1 = 'https://sample-invoice.herokuapp.com/forget'

class Forget extends React.Component{

    constructor(){
    
        super();
        this.state = {
    
            email:''
        }
    }
    
    handleChange = ({target:{name , value}}) =>{
    
     this.setState({[name] : value})
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        this.forget();
    }
    
    forget = async () =>{
    
     const {data} = await axios.post(API_URL1 , {
    email:this.state.email
    
     },{

        withCredentials: true
      }) 
     if(data.result == "success"){
    
    
        alert(data.message); 
      
      }
      
      else{
      
        alert(data.message);
      }
    
      this.setState({email:''});
    }
    
    
    render(){
    
    
        return (
            <>
            <div class="login-content">
            <div class="nk-block toggled" id="l-forget-password">
            <form onSubmit={this.handleSubmit}>
            <div class="nk-form">
                <p class="text-left">Enter your registered  Email id</p>

                <div class="input-group">
                    <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-envelope"></i></span>
                    <div class="nk-int-st">
                    <input type="text" class="form-control" name="email" value={this.state.email} placeholder="Email Address" onChange={this.handleChange} />
                    </div>
                </div>

                <button type="Submit" class="btn btn-login btn-success btn-float">Submit <i class="fa fa-arrow-right"></i></button>
            </div>

            <div class="nk-navigation nk-lg-ic rg-ic-stl">
                <a href="/login" data-ma-action="nk-login-switch" data-ma-block="#l-login"><i class="fa fa-arrow-right"></i> <span>Login</span></a>
                <a href="/Registration" data-ma-action="nk-login-switch" data-ma-block="#l-register"><i class="fa fa-user"></i> <span>Register</span></a>
            </div>
            </form>
        </div>
        </div>
            </>
        )
    }
    
    }
    
    export default Forget;
    