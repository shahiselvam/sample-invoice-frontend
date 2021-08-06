import  React  from 'react';
import Header from './header';
import Footer from './footer';
import axios from 'axios';

const API_URL = 'https://sample-invoice.herokuapp.com/userDetailsCount';
const API_URL1 = 'https://sample-invoice.herokuapp.com/CustomerCount';
const API_URL2 = 'https://sample-invoice.herokuapp.com/InvoiceCount';

class Home extends React.Component{

constructor(){

    super();

    this.state = {
    INvoice:'',
    User:'',
    Customer:''

    }
}

componentDidMount(){
this.getInvoice();
this.getCustomer();
this.getUser();

}
getInvoice =  async () =>{

    const {data} = await axios.get(API_URL2, {

        withCredentials: true
    });
    this.setState({INvoice :data });
 }
 getCustomer = async () => {

     const { data } = await axios.get(API_URL1, {

        withCredentials: true
    });
     this.setState({Customer : data})
 }

 getUser = async () => {

    const { data } = await axios.get(API_URL, {

       withCredentials: true
   });
    this.setState({User : data})
}
render(){

    return(
     <>

<Header />


    <div class="notika-status-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="invoice-hs wt-inv sm-res-mg-t-30 tb-res-mg-t-30 tb-res-mg-t-0">
                        <div class="website-traffic-ctn">
                            <h2><span class="counter">{this.state.INvoice}</span></h2>
                            <p>Invoice</p>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="invoice-hs gdt-inv sm-res-mg-t-30 tb-res-mg-t-30 tb-res-mg-t-0">
                        <div class="website-traffic-ctn">
                            <h2><span class="counter">{this.state.User}</span></h2>
                            <p>Users</p>
                        </div>
                        
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div class="invoice-hs date-inv sm-res-mg-t-30 tb-res-mg-t-30 tb-res-mg-t-0">
                        <div class="website-traffic-ctn">
                            <h2><span class="counter">{this.state.Customer}</span></h2>
                            <p>Customer</p>
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

export default Home;