import React from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';


const API_URL1 = 'https://sample-invoice.herokuapp.com/customer';
class customer extends React.Component {


    constructor() {

        super();

        this.state = {

            CustomerName: '',
            Phone: '',
            Email: '',
            Address: '',
            Customer: []

        }

    }

    componentDidMount() {

        this.getCustomer();
    }


    getCustomer = async () => {

        const { data } = await axios.get(API_URL1, {

            withCredentials: true
        })

        this.setState({ Customer: data });

    }
    handleChange = ({ target: { name, value } }) => {

        this.setState({ [name]: value })

    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.CreateCustomer();

    }
    CreateCustomer = async () => {

        const { data } = await axios.post(API_URL1, {
            CustomerName: this.state.CustomerName,
            Phone: this.state.Phone,
            Email: this.state.Email,
            Address: this.state.Address


        }, {

            withCredentials: true
        })


        if (data.result == "success") {

            alert(data.message)

        }

        else {

            alert(data.message)
        }
        this.setState({
            CustomerName: '',
            Phone: '',
            Email: '',
            Address: ''
        })

        this.getCustomer();
    }
    render() {


        return (

            <>
                <Header />
                <div class="form-element-area">
                    <div class="container">
                        <div class="row">
                            <form onSubmit={this.handleSubmit}>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-element-list">

                                        <div class="cmp-tb-hd bcs-hd">
                                            <h2>Customer</h2>
                                            {/* <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. </p> */}
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group ic-cmp-int">

                                                    <div class="form-ic-cmp">

                                                    </div>
                                                    <div class="nk-int-st">
                                                        <input type="text" class="form-control" name="CustomerName" value={this.state.CustomerName} placeholder="Customer Name" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group ic-cmp-int">
                                                    <div class="form-ic-cmp">

                                                    </div>
                                                    <div class="nk-int-st">
                                                        <input type="number" class="form-control" name="Phone" value={this.state.Phone} placeholder="Phone Number" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">


                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group ic-cmp-int">
                                                    <div class="form-ic-cmp">

                                                    </div>
                                                    <div class="nk-int-st">
                                                        <input type="text" class="form-control" name="Email" value={this.state.Email} placeholder="Email" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="form-group ic-cmp-int">
                                                    <div class="form-ic-cmp">

                                                    </div>
                                                    <div class="nk-int-st">
                                                        <input type="text" class="form-control" name="Address" value={this.state.Address} placeholder="Address" onChange={this.handleChange} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="material-design-btn">
                                                <button type="submit" class="btn notika-btn-green btn-reco-mg btn-button-mg waves-effect">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <div class="normal-table-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="normal-table-list">
                                    <div class="basic-tb-hd">
                                        <h2>Customer</h2>

                                    </div>
                                    <div class="bsc-tbl-hvr">
                                        <table class="table table-hover">
                                            <thead>

                                                <tr>

                                                    <th>CustomerName</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>Address</th>

                                                </tr>



                                            </thead>
                                            <tbody>
                                                {this.state.Customer.map(Customers => {
                                                    return (
                                                        <tr>
                                                            <td>{Customers.CustomerName}</td>
                                                            <td>{Customers.Phone}</td>
                                                            <td>{Customers.Email}</td>
                                                            <td>{Customers.Address}</td>
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


export default customer;