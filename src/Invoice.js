import React from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';


const API_URL1 = 'https://sample-invoice.herokuapp.com/customer';
const API_URL2 = 'https://sample-invoice.herokuapp.com/products';
const API_URL3 = 'https://sample-invoice.herokuapp.com/Invoice';


class invoice extends React.Component {

    constructor() {

        super();
        this.state = {

            customer_Id: '',
            customerName: '',
            CustomerPhone: '',
            CustomerEmail: '',
            CustomerAddress: '',
            Customer: [],
            Product_Id: '',
            ProductName: '',
            ProductQuantity: '',
            ProductAmount: '',
            ProductBarcode: '',
            ProductTotal: '',
            Products: [],
            ProductDetails: [],
            grandTotal: '',
            tax: '',
            taxAmount: '',
            taxTotal: '',
            taxProductTotal: '',
            taxGrandTotal: ''

        }
    }


    componentDidMount() {

        this.getCustomer();
        this.getProduct();

    }
    getProduct = async () => {

        const { data } = await axios.get(API_URL2, {

            withCredentials: true
        })

        this.setState({ Products: data });

    }


    getCustomer = async () => {

        const { data } = await axios.get(API_URL1, {

            withCredentials: true
        })

        this.setState({ Customer: data });

    }

    handleChange = async ({ target: { name, value } }) => {
        this.setState({ [name]: value })


        const { data } = await axios.get(`${API_URL1}/${value}`, {

            withCredentials: true
        })
        this.setState({
            customer_Id: data._id,
            customerName: data.CustomerName,
            CustomerPhone: data.Phone,
            CustomerEmail: data.Email,
            CustomerAddress: data.Address
        })

    }

    ProductChange = async ({ target: { name, value } }) => {

        this.setState({ [name]: value })

        const { data } = await axios.get(`${API_URL2}/${value}`, {

            withCredentials: true
        })


        const taxTotal = ((parseInt(data.Amount) * data.tax) / 100);
        const TotalTax = parseInt(data.Amount) + taxTotal;

        this.setState({
            ProductName: data.ProductName,
            ProductBarcode: data.Barcode,
            ProductQuantity: 1,
            ProductAmount: parseInt(data.Amount),
            ProductTotal: parseInt(data.Amount),
            tax: data.tax,
            taxAmount: taxTotal,
            taxTotal: TotalTax


        })
    }
    QtyChange = async ({ target: { name, value } }) => {

        this.setState({ [name]: parseInt(value) });
        const Total = this.state.ProductAmount * value;

        
        const taxValue = ((Total * this.state.tax) / 100);
        const taxTotal = Total + taxValue;

        this.setState({
            ProductTotal: Total,
            taxAmount: taxValue,
            taxTotal: taxTotal

        })




    }

    productAdd = (event) => {

        event.preventDefault();
        this.Addproduct();

    }
    Addproduct = async () => {

        const data = {
            Product_Id: this.state.Product_Id,
            ProductName: this.state.ProductName,
            Amount: this.state.ProductAmount,
            Quantity: this.state.ProductQuantity,
            Barcode: this.state.ProductBarcode,
            Tax: this.state.tax,
            TaxAmount: this.state.taxAmount,
            TaxTotal: this.state.taxTotal,
            SubTotal: this.state.ProductTotal,


        }

        console.log(data);

        const ProductDetails = [...this.state.ProductDetails];
        ProductDetails.push(data);

        const grandTotal = ProductDetails.reduce((a, v) => a = a + v.SubTotal, 0);
        const taxProductTotal = ProductDetails.reduce((a, v) => a = a + v.TaxAmount, 0);
        const taxGrandTotal = ProductDetails.reduce((a, v) => a = a + v.TaxTotal, 0);

        this.setState({
            ProductDetails,
            Product_Id: '',
            ProductName: '',
            ProductQuantity: '',
            ProductAmount: '',
            ProductBarcode: '',
            ProductTotal: '',
            grandTotal: grandTotal,
            taxProductTotal: taxProductTotal,
            taxGrandTotal: taxGrandTotal
        })


    }

    handleSubmit = async (event) => {

        event.preventDefault();
        this.createInvioce();

    }

    createInvioce = async () => {

        debugger
        const { data } = await axios.post(API_URL3,
            {
                customer_Id: this.state.customer_Id,
                customerName: this.state.customerName,
                CustomerPhone: this.state.CustomerPhone,
                CustomerEmail: this.state.CustomerEmail,
                CustomerAddress: this.state.CustomerAddress,
                ProductDetails: this.state.ProductDetails,
                GrandTotal: this.state.grandTotal,
                TaxProductTotal: this.state.taxProductTotal,
                TaxGrandTotal: this.state.taxGrandTotal


            }, {

            withCredentials: true
        })
        console.log(data);
        debugger
        if (data.result == "success") {

            alert(data.message)

        }

        else {

            alert(data.message)
        }
        this.setState({
            customer_Id: '',
            CustomerName: '',
            CustomerPhone: '',
            CustomerEmail: '',
            CustomerAddress: '',

            Product_Id: '',
            ProductName: '',
            ProductQuantity: '',
            ProductAmount: '',
            ProductBarcode: '',
            ProductTotal: '',

            ProductDetails: [],
            grandTotal: '',
            tax: '',
            taxAmount: '',
            taxTotal: '',
            taxProductTotal: '',
            taxGrandTotal: ''
        })



    }
    render() {


        return (

            <>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <div class="form-element-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-element-list mg-t-30">
                                        <div class="cmp-tb-hd">
                                            <h2> Customer Details</h2>

                                        </div>

                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                                <div class="nk-int-mk sl-dp-mn">

                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                    <div class="bootstrap-select fm-cmp-mg">
                                                        <select class="selectpicker" data-placeholder="Choose a Customer..." name="CustomerName" value={this.state.CustomerName} onChange={this.handleChange} >
                                                            <option value="" disabled selected hidden>Choose a Customer...</option>
                                                            {this.state.Customer.map(Customers => {
                                                                return (
                                                                    <option value={Customers._id}>{Customers.CustomerName}</option>
                                                                )
                                                            })}

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                    <div class="form-group ic-cmp-int">

                                                        <div class="form-ic-cmp">

                                                        </div>
                                                        <div class="nk-int-st">
                                                            <input type="text" class="form-control" name="CustomerPhone" value={this.state.CustomerPhone} placeholder="Customer Phone" onChange={this.handleChange} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                    <div class="form-group ic-cmp-int">

                                                        <div class="form-ic-cmp">

                                                        </div>
                                                        <div class="nk-int-st">
                                                            <input type="text" class="form-control" name="CustomerEmail" value={this.state.CustomerEmail} placeholder="Customer Email" onChange={this.handleChange} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                    <div class="form-group ic-cmp-int">

                                                        <div class="form-ic-cmp">

                                                        </div>
                                                        <div class="nk-int-st">
                                                            <input type="text" class="form-control" name="CustomerAddress" value={this.state.CustomerAddress} placeholder="Customer Address" onChange={this.handleChange} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                        <br />
                                        <br />

                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-element-list mg-t-30">
                                                <div class="cmp-tb-hd">
                                                    <h2> Product Details</h2>

                                                </div>

                                                <div class="row">
                                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                                        <div class="nk-int-mk sl-dp-mn">

                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                            <div class="bootstrap-select fm-cmp-mg">
                                                                <div class="form-group">
                                                                    <label></label>

                                                                    <select class="selectpicker" data-placeholder="Choose a Product..." name="Product_Id" value={this.state.Product_Id} onChange={this.ProductChange} >
                                                                        <option value="" disabled selected hidden>Choose a Product</option>
                                                                        {this.state.Products.map(products => {
                                                                            return (
                                                                                <option value={products._id}>{products.ProductName}</option>
                                                                            )
                                                                        })}

                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                                                            <div class="form-example-int">
                                                                <div class="form-group">
                                                                    <label>Barcode</label>
                                                                    <div class="nk-int-st">
                                                                        <input type="text" name="ProductBarcode" value={this.state.ProductBarcode} class="form-control input-sm" placeholder="Barcode" onChange={this.ProductChange} disabled />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                                                            <div class="form-example-int">
                                                                <div class="form-group">
                                                                    <label>Quantity</label>
                                                                    <div class="nk-int-st">
                                                                        <input type="number" name="ProductQuantity" value={this.state.ProductQuantity} class="form-control input-sm" placeholder="Quantity" onChange={this.QtyChange} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                                                            <div class="form-example-int">
                                                                <div class="form-group">
                                                                    <label>Amount</label>
                                                                    <div class="nk-int-st">
                                                                        <input type="number" name="ProductAmount" value={this.state.ProductAmount} class="form-control input-sm" placeholder="Amount" onChange={this.ProductChange} disabled />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                                                            <div class="form-example-int">
                                                                <div class="form-group">
                                                                    <label>Tax%</label>
                                                                    <div class="nk-int-st">
                                                                        <input type="number" name="tax" value={this.state.tax} class="form-control input-sm" placeholder="Tax" onChange={this.ProductChange} disabled />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                            <div class="form-example-int">
                                                                <div class="form-group">
                                                                    <label>Tax Amount</label>
                                                                    <div class="nk-int-st">
                                                                        <input type="number" name="taxAmount" value={this.state.taxAmount} class="form-control input-sm" placeholder="TaxAmount" onChange={this.ProductChange} disabled />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                            <div class="form-example-int">
                                                                <div class="form-group">
                                                                    <label>ProductTotal</label>
                                                                    <div class="nk-int-st">
                                                                        <input type="number" name="ProductTotal" value={this.state.ProductTotal} class="form-control input-sm" placeholder="ProductTotal" onChange={this.ProductChange} disabled />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                                                            <div class="form-example-int">
                                                                <div class="form-group">
                                                                    <label>Total</label>
                                                                    <div class="nk-int-st">
                                                                        <input type="number" name="taxTotal" value={this.state.taxTotal} class="form-control input-sm" placeholder="Tax Total" onChange={this.ProductChange} disabled />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                                                            <div class="form-example-int mg-t-15">
                                                                <button onClick={this.productAdd} class="btn btn-success notika-btn-success">ADD</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="normal-table-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="normal-table-list">
                                        <div class="basic-tb-hd">
                                            <h2>Products</h2>

                                        </div>
                                        <div class="bsc-tbl-hvr">
                                            <table class="table table-hover">
                                                <thead>

                                                    <tr>

                                                        <th>ProductName</th>
                                                        <th>Barcode</th>
                                                        <th>Quantity</th>
                                                        <th>Amount</th>
                                                        <th>Tax%</th>
                                                        <th>TaxAmount</th>
                                                        <th>ProductTotal</th>
                                                        <th>Total</th>

                                                    </tr>



                                                </thead>
                                                <tbody>
                                                    {this.state.ProductDetails.map(ProductDetail => {
                                                        return (
                                                            <tr>
                                                                <td>{ProductDetail.ProductName}</td>
                                                                <td>{ProductDetail.Barcode}</td>
                                                                <td>{ProductDetail.Quantity}</td>
                                                                <td>{ProductDetail.Amount}</td>
                                                                <td>{ProductDetail.Tax}</td>
                                                                <td>{ProductDetail.TaxAmount}</td>
                                                                <td>{ProductDetail.SubTotal}</td>
                                                                <td>{ProductDetail.TaxTotal}</td>
                                                            </tr>

                                                        )
                                                    })}

                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>ProductTotal:</td>
                                                        <td>{this.state.grandTotal}</td>
                                                    </tr>

                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>Tax:</td>
                                                        <td>{this.state.taxProductTotal}</td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>Total:</td>
                                                        <td>{this.state.taxGrandTotal}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="material-design-btn">
                                            <button type="submit" class="btn notika-btn-green btn-reco-mg btn-button-mg waves-effect">Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </form>
                <Footer />
            </>

        )


    }

}
export default invoice;