import React from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
const API_URL = 'https://sample-invoice.herokuapp.com/employeeRegistration';
const API_URL1 = 'https://sample-invoice.herokuapp.com/userDetails';

class employeeRegistration extends React.Component {

    constructor() {


        super();

        this.state = {


            FirstName: '',
            LastName: '',
            email: '',
            password: '',
            confirmpassword: '',
            role: '',
            user: []



        }
    }
    componentDidMount() {

        this.getUser();
    }

    getUser = async () => {

        const { data } = await axios.get(API_URL1, {

            withCredentials: true
        });

        this.setState({ user: data })
    }

    handleChange = ({ target: { name, value } }) => {

        this.setState({ [name]: value })

    }
    handelSubmit = (event) => {

        event.preventDefault();

        this.createUser();
    }

    createUser = async () => {

        const { data } = await axios.post(API_URL, {

            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            email: this.state.email,
            password: this.state.password,
            confirmpassword: this.state.confirmpassword,
            role: this.state.role
        },
            {

                withCredentials: true

            })

        if (data.result === "success") {

            alert(data.message);
        }

        else {

            alert(data.message);
        }


        this.setState({ FirstName: '', LastName: '', email: '', password: '', confirmpassword: '' })

    }
    render() {
        return (
            <>
                <Header />
                <div class="form-example-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-example-wrap">
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
                                                    <input type="text" class="form-control" name="LastName" value={this.state.LastName} placeholder="Last Name" onChange={this.handleChange} />
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
                                                    <input type="password" class="form-control" name="password" value={this.state.password} placeholder="Password" onChange={this.handleChange} />
                                                </div>
                                            </div>

                                            <div class="input-group mg-t-15">
                                                <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-key"></i></span>
                                                <div class="nk-int-st">
                                                    <input type="password" class="form-control" name="confirmpassword" value={this.state.confirmpassword} placeholder="Confirm Password" onChange={this.handleChange} />
                                                </div>
                                            </div>

                                            <div class="input-group mg-t-15">
                                                <span class="input-group-addon nk-ic-st-pro"><i class="fa fa-user-plus"></i></span>
                                                <div class="nk-int-st">
                                                    <select name="role" class="btn dropdown-toggle btn-default" value={this.state.role} onChange={this.handleChange} placeholder="Confirm Password">
                                                        <option disabled>Select Role</option>
                                                        <option value="admin">Admin</option>
                                                        <option value="employee"> Employee</option>
                                                    </select>
                                                </div>
                                            </div>


                                        </div>
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
             {/* //Active Users //  */}
                <div class="normal-table-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="normal-table-list">
                                    <div class="basic-tb-hd">
                                        <h2>Users</h2>
                                       
                                    </div>
                                    <div class="bsc-tbl-hvr">
                            <table class="table table-hover">
                                            <thead>
                                                
                                                    <tr>
                                                   
                                                   <th>First Name</th>
                                                   <th>Last Name</th>
                                                   <th>Username</th>
                                                   <th>Role</th>
                                                   
                                               </tr>

                                         
                                                
                                            </thead>
                                            <tbody>
                                            {this.state.user.map(Users =>{
                                                return(
                                                <tr>
                                                    <td>{Users.FirstName}</td>
                                                    <td>{Users.LastName}</td>
                                                    <td>{Users.email}</td>
                                                    <td>{Users.role}</td>
                                                </tr>
                                                )
                                                       })}
                                            </tbody>
                                        </table>
                                    </div>
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

export default employeeRegistration;
