
import React from 'react';
import {BrowserRouter , Route , Switch ,Redirect} from 'react-router-dom';
import Registration from './register';
import login from './login';
import Forget from './ForgetPassword';
import reset from './ResetPassword';
import home from './home';
import employeeRegistration from './EmployeeRegistration';
import userRights from './UserRights';
import products from './Products';
import customer from './Customer';
import invoice from './Invoice';
import viewInvoice from './viewInvoice';
import printInvoice from './printinvoice';

function App() {
  return (
   <>
    <BrowserRouter>   
    <Switch>
    <Route path="/Registration" component={Registration} />
    <Route path="/login" component={login} />
    <Route path="/Forget" component={Forget} />
    <Route path="/reset" component={reset} />
    <Route path="/home" component={home} />
    <Route path="/employeeRegistration" component={employeeRegistration} />
    <Route path="/userRights" component={userRights} />
    <Route path="/products" component={products} />
    <Route path="/customer" component={customer} />
    <Route path="/invoice" component={invoice} />
    <Route path="/viewInvoice" component={viewInvoice} />
    <Route path="/printInvoice/:id" component={printInvoice} />
    <Route exact path="/">
     <Redirect to="/login" />
   </Route>
    </Switch>


    </BrowserRouter>
   </>
  );
}

export default App;
