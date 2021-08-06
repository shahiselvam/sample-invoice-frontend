import React from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import { jsPDF } from "jspdf";

const API_URL3 = 'https://sample-invoice.herokuapp.com/Invoice';


class printInvoice extends React.Component {

    constructor() {

        super();

        this.state = {
            invoice: [],
            products:[]

        }




    }

    componentDidMount() {

        const id = this.props.match.params.id;

        this.getInvoice(id);


    }

    getInvoice = async (id) => {

        const { data } = await axios.get(`${API_URL3}/${id}`, {

            withCredentials: true
        });

        this.setState({ invoice: data , products:data.ProductDetails });


     
        console.log(this.state.products);
     
    }

    buttonClick = (event) =>{
    event.preventDefault();

    this.printInvoice();
   
    }
    printInvoice = () =>{
    

    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById("print-div").innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); 
    mywindow.focus(); 

    mywindow.print();
    mywindow.close();

    return true;
    }
    render() {


        return (
            <>
                <Header />

                <div class="invoice-area">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="invoice-wrap" id="print-div">
                                    <div class="invoice-img">
                                        <h2>Sample Invoice</h2>
                                    </div>
                                    <div class="invoice-hds-pro">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="invoice-cmp-ds ivc-frm">
                                                    <div class="invoice-frm">
                                                        <span>Invoice from</span>
                                                    </div>
                                                    <div class="comp-tl">
                                                        <h2>Lorem Ipsum</h2>
                                                        <p>44, Qube Towers uttara Media City, Dubai, Bangladesh</p>
                                                    </div>
                                                    <div class="cmp-ph-em">
                                                        <span>01962067309</span>
                                                        <span>lorem@gmail.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <div class="invoice-cmp-ds ivc-to">
                                                    <div class="invoice-frm">
                                                        <span>Invoice to</span>
                                                    </div>
                                                    <div class="comp-tl">
                                                        <h2>{this.state.invoice.customerName}</h2>
                                                        <p>{this.state.invoice.CustomerAddress}</p>
                                                    </div>
                                                    <div class="cmp-ph-em">
                                                        <span>{this.state.invoice.CustomerPhone}</span>
                                                        <span>{this.state.invoice.CustomerEmail}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div class="invoice-hs">
                                                <span>Invoice#</span>
                                                <h2>456656</h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div class="invoice-hs date-inv sm-res-mg-t-30 tb-res-mg-t-30 tb-res-mg-t-0">
                                                <span>Product Total</span>
                                                <h2>{this.state.invoice.GrandTotal}</h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div class="invoice-hs wt-inv sm-res-mg-t-30 tb-res-mg-t-30 tb-res-mg-t-0">
                                                <span>Tax</span>
                                                <h2>{this.state.invoice.TaxProductTotal}</h2>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div class="invoice-hs gdt-inv sm-res-mg-t-30 tb-res-mg-t-30 tb-res-mg-t-0">
                                                <span>Grand Total</span>
                                                <h2>{this.state.invoice.TaxGrandTotal}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="invoice-sp">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>

                                                            <th>Barcode</th>
                                                            <th>ProductName</th>
                                                            <th>Quantity</th>
                                                            <th>Amount</th>
                                                            <th>Tax%</th>
                                                            <th>Tax Amount</th>
                                                            <th>Product Total</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        
                                                         
                                                            {this.state.products.map(ProductDetail => {

                                                                return (
                                                                   
                                                                    <>
                                                                     <tr>
                                                                    <td>{ProductDetail.Barcode}</td>
                                                                    <td>{ProductDetail.ProductName}</td>
                                                                    <td>{ProductDetail.Quantity}</td>
                                                                    <td>{ProductDetail.Amount}</td>
                                                                    <td>{ProductDetail.Tax}</td>
                                                                    <td>{ProductDetail.TaxAmount}</td>
                                                                    <td>{ProductDetail.SubTotal}</td>
                                                                    <td>{ProductDetail.TaxTotal}</td>
                                                                    </tr>
                                                                    </>

                                                                )
                                                            })}

                                                       <tr></tr>
                                                       <tr>
                                                           <td></td>
                                                           <td></td>
                                                           <td></td>
                                                           <td></td>
                                                           <td></td>
                                                           <td></td>
                                                           <td></td>
                                                           
                                                           <td> <button type="submit" onClick={this.buttonClick}  class="btn notika-btn-green btn-reco-mg btn-button-mg waves-effect">Print</button>   </td>
                                                       </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
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

export default printInvoice;