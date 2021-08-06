import React from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';

import {Link} from 'react-router-dom';

const API_URL3 = 'https://sample-invoice.herokuapp.com/Invoice';
const API_URL4 = 'https://sample-invoice.herokuapp.com/StockInvoice';



class viewInvoice extends React.Component {

    constructor() {

        super();

        this.state = {

            invoice: []
        }

    }

    componentDidMount() {
    this.getInvoice();


    }
    getInvoice = async () =>{

     const {data} = await axios.get( API_URL3 , {

        withCredentials: true
     })

     this.setState({invoice:data})

    }

    deleteInvoice = async id => {
    debugger
    const { data} = await axios.delete(`${API_URL4}/${id}`,{

        withCredentials: true
     });
    
    if(data.result = "Success") {

        alert(data.message);
    }
    
    else{

        alert(data.message);
    }
    debugger
    let invoices = [...this.state.invoice];
    invoices = invoices.filter(({ _id }) => _id != id);
        this.setState({ invoices });

        this.getInvoice();

    }
 
    render() {


        return (

            <>
            <Header />
                <div class="normal-table-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="normal-table-list">
                                    <div class="basic-tb-hd">
                                        <h2>Invoice</h2>

                                    </div>
                                    <div class="bsc-tbl-hvr">
                                        <table class="table table-hover">
                                            <thead>

                                                <tr>

                                                    <th>CustomerName</th>
                                                    <th>Phone</th>
                                                    <th>Email</th>
                                                    <th>View</th>
                                                    <th>Delete</th>
                                                    <th>Print</th>

                                                </tr>



                                            </thead>
                                            <tbody>
                                                {this.state.invoice.map(invoices => {
                                                    return (
                                                        <tr key={invoices._id}>
                                                            <td>{invoices.customerName}</td>
                                                            <td>{invoices.CustomerPhone}</td>
                                                            <td>{invoices.CustomerEmail}</td>
                                                            <td><Link to={`/printInvoice/${invoices._id}`}> <i class="fa fa-eye"></i></Link></td>
                                                            <td><Link><i class="fa fa-trash" onClick={() => this.deleteInvoice(invoices._id)}></i></Link></td>
                                                            <td><Link to={`/printInvoice/${invoices._id}`}><i class="fa fa-print"></i></Link></td>    
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

export default viewInvoice;