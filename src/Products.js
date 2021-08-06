import React from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';


const API_URL1 = 'https://sample-invoice.herokuapp.com/products';
class products extends React.Component {


    constructor(){

        super();

        this.state = {
          
            ProductName:'',
            Amount:'',
            Quantity:'',
            Barcode:'',
            tax: '',
            Product:[]

        }

    }

    componentDidMount(){

        this.getProducts();
    }


    getProducts = async () =>{
        
   const { data } = await axios.get(API_URL1,{

    withCredentials: true
   })
   debugger
   this.setState({ Product: data });
   console.log(this.state.Product);
    }
    handleChange = ({target:{ name, value }}) =>{

     this.setState({[name]: value})
      
    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.CreateProduct();

    }
    CreateProduct = async () => {
        
    const { data } =  await axios.post(API_URL1,{
        ProductName:this.state.ProductName,
        Amount:this.state.Amount,
        Quantity:this.state.Quantity,
        tax:this.state.tax,
        Barcode:this.state.Barcode
        

    },{

        withCredentials: true
    }) 
    
    
    if(data.result == "success"){

alert(data.message)

    }

    else{

        alert(data.message)
    }
this.setState({ProductName:'',
Amount:'',
Quantity:'',
Barcode:'',
tax:''})

this.getProducts();
    }
    render() {


        return(

            <>
            <Header />
    <div class="form-element-area">
        <div class="container">
        <div class="row">
            <form onSubmit ={this.handleSubmit}>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-element-list">
                       
                        <div class="cmp-tb-hd bcs-hd">
                            <h2>Products</h2>
                            {/* <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. </p> */}
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group ic-cmp-int">
                              
                                    <div class="form-ic-cmp">
                                    
                                    </div>
                                    <div class="nk-int-st">
                                        <input type="text" class="form-control" name="ProductName" value={this.state.ProductName} placeholder="Product Name" onChange={this.handleChange} />
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
                                    <input type="number" class="form-control" name="Amount" value={this.state.Amount} placeholder="Amount" onChange={this.handleChange} />
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
                                    <input type="number" class="form-control" name="Quantity" value={this.state.Quantity} placeholder="Quantity" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group ic-cmp-int">
                                    <div class="form-ic-cmp">
                                       
                                    </div>
                                    <div class="nk-int-st">
                                    <input type="number" class="form-control" name="tax" value={this.state.tax} placeholder="Tax" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="form-group ic-cmp-int">
                                    <div class="form-ic-cmp">
                                       
                                    </div>
                                    <div class="nk-int-st">
                                    <input type="text" class="form-control" name="Barcode" value={this.state.Barcode} placeholder="Barcode" onChange={this.handleChange} />
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
                                        <h2>Products</h2>
                                       
                                    </div>
                                    <div class="bsc-tbl-hvr">
                            <table class="table table-hover">
                                            <thead>
                                                
                                                    <tr>
                                                   
                                                   <th>ProductName</th>
                                                   <th>Amount</th>
                                                   <th>Quantity</th>
                                                   <th>Barcode</th>
                                                   <th>Tax</th>
                                                   
                                               </tr>

                                         
                                                
                                            </thead>
                                            <tbody>
                                            {this.state.Product.map(products =>{
                                                return(
                                                <tr>
                                                    <td>{products.ProductName}</td>
                                                    <td>{products.Amount}</td>
                                                    <td>{products.Quantity}</td>
                                                    <td>{products.Barcode}</td>
                                                    <td>{products.tax}</td>
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


export default products;