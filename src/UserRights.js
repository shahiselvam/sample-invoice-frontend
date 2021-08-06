import React from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';

const API_URL1 = 'https://sample-invoice.herokuapp.com/userDetails';
const API_URL = 'https://sample-invoice.herokuapp.com/userRights';
class userRights extends React.Component {

 constructor(){

super();

this.state = {
  user:[],
  Create:false,
  Edit:false,
  View:false,
  Delete:false,
  Print:false,
  User_Id:''
}
 }

 componentDidMount() {

    this.getUser();

 }

 getUser = async () =>{

    const {data} = await axios.get(API_URL1 , {

        withCredentials: true
    })

    this.setState({ user: data })
    console.log(this.state. user);
 }

 handleChange = ({target:{name , value ,checked}}) =>{

    if (name === 'Create' || name ===  'Edit' || name === 'View' || name ===  'Delete' ||  name === 'Print')  {
        value = checked;
      }

      
   this.setState({[name] : value})
   console.log(name,value);

 } 

 handleSubmit = (event) =>{
    event.preventDefault();

    this.createUser();
}

createUser = async () =>{

const { data } = await axios.post( API_URL , {

    User_Id : this.state.User_Id,
    Create : this.state.Create,
    Edit : this.state.Edit,
    View:this.state.View,
    Delete:this.state.Delete,
    Print:this.state.Print

},{

    withCredentials: true
})

if(data.result = "success"){
    alert(data.message);
}

else{

    alert(data.message);
}

this.setState({
    Create:false,
    Edit:false,
    View:false,
    Delete:false,
    Print:false,
    User_Id:''})
}



  render(){


    return(

        <>

        <Header />
        <div class="form-element-area">
        <div class="container">
        <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-element-list mg-t-30">
                    <div class="cmp-tb-hd">
                            <h2> UserRights</h2>
                            
                        </div>
                        <form onSubmit={this.handleSubmit}>
                    <div class="row">
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">

                            <div class="nk-int-mk sl-dp-mn">
                                   
                                </div>
                                <div class="bootstrap-select fm-cmp-mg">
                                    
                                    <select class="selectpicker" data-placeholder="Choose a User..."  name="User_Id" value={this.state.User_Id} onChange={this.handleChange} >
                                    <option value="" disabled selected hidden>Choose a User...</option>
                                        {this.state.user.map(Users => {
                                            return (
											<option value={Users._id}>{Users.FirstName}{Users.LastName}</option>
                                            )
                                        })}

									</select>
                                </div>
                                </div>
                             
                                               
                                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <label><input type="checkbox" checked={this.state.Create} class="i-checks" name="Create" onChange={this.handleChange} /> <i></i> Create</label>
                                    </div>
                                 
                             
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <label><input type="checkbox" checked={this.state.Edit} class="i-checks" name="Edit" onChange={this.handleChange} /> <i></i> Edit</label>
                                    </div>
                               
                                    
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <label><input type="checkbox" checked={this.state.View} class="i-checks" name="View" onChange={this.handleChange} /> <i></i> View</label>
                                    </div>
                                 
                               
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <label><input type="checkbox" checked={this.state.Delete} class="i-checks" name="Delete" onChange={this.handleChange} /> <i></i> Delete</label>
                                    </div>
                                 
                                
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <label><input type="checkbox" checked={this.state.Print} class="i-checks"  name="Print" onChange={this.handleChange} /> <i></i> Print</label>
                                   
                                 
                                </div>
                                </div>
                                <br />
                                <br />
                                <div class="input-group mg-t-15">
                                            <span class="input-group-addon nk-ic-st-pro"></span>
                                            <div class="nk-int-st">
                                                <button type="Submit" class="btn btn-success notika-btn-success waves-effect">Submit <i class="fa fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                </form>
                    </div>
              
                    </div>
                    </div>
            </div>
            
            </div>
        <Footer />

        </>
    )
 }

}

export default  userRights