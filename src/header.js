import React from 'react';

export default function header() {


    return (
        <>
            <div class="header-top-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div class="logo-area">
                                <a href="#"><img src="img/logo/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div class="header-top-menu">
                                <ul class="nav navbar-nav notika-top-nav">
                                    <li class="nav-item dropdown">
                                        <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle"><span><i class="notika-icon notika-search"></i></span></a>
                                        <div role="menu" class="dropdown-menu search-dd animated flipInX">
                                            <div class="search-input">
                                                <i class="notika-icon notika-left-arrow"></i>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mobile-menu-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="mobile-menu">
                                <nav id="dropdown">
                                    <ul class="mobile-menu-nav">
                                        <li><a data-toggle="collapse" data-target="#" href="/Home">Home</a>

                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Product" href="#">Products</a>
                                            <ul id="Product" class="collapse dropdown-header-top">
                                                <li><a href="/Products">Create Products</a></li>

                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Customer" href="#">Customer</a>
                                            <ul id="Customers" class="collapse dropdown-header-top">
                                                <li><a href="/Customer">Customer</a></li>

                                            </ul>
                                        </li>

                                        <li><a data-toggle="collapse" data-target="#Users" href="#">Users</a>
                                            <ul id="Users" class="collapse dropdown-header-top">
                                                <li><a href="/employeeRegistration">Create User</a>
                                                </li>
                                                <li><a href="/userRights">UserManagement</a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li><a data-toggle="collapse" data-target="#Invoices" href="#">Invoice</a>
                                            <ul id="Invoices" class="collapse dropdown-header-top">
                                                <li><a href="/invoice">Create Invoice</a>
                                                </li>
                                                <li><a href="/viewInvoice">View Invoice</a>
                                                </li>

                                            </ul>
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="main-menu-area mg-tb-40">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <ul class="nav nav-tabs notika-menu-wrap menu-it-icon-pro">
                                <li class="active"><a data-toggle="tab" href="#Home"><i class="fa fa-home"></i> Home</a>
                                </li>
                                <li><a data-toggle="tab" href="#Products"><i class="fa fa-product-hunt"></i> Products</a>
                                </li>
                                <li><a data-toggle="tab" href="#Customer"><i class="fa fa-users"></i> Customer</a>
                                </li>
                                <li><a data-toggle="tab" href="#user"><i class="fa fa-user"></i> Users</a>
                                </li>
                                <li><a data-toggle="tab" href="#Invoice"><i class="fa fa-pencil-square-o"></i> Invoice</a>
                                </li>


                            </ul>
                            <div class="tab-content custom-menu-content">
                                <div id="Home" class="tab-pane in active notika-tab-menu-bg animated flipInX">
                                    <ul class="notika-main-menu-dropdown">
                                        <li><a href="/Home">Home</a>
                                        </li>

                                    </ul>
                                </div>
                                <div id="Products" class="tab-pane notika-tab-menu-bg animated flipInX">
                                    <ul class="notika-main-menu-dropdown">
                                        <li><a href="/Products">Create Products</a>
                                        </li>

                                    </ul>
                                </div>
                                <div id="Customer" class="tab-pane notika-tab-menu-bg animated flipInX">
                                    <ul class="notika-main-menu-dropdown">
                                        <li><a href="/Customer">Customer</a>
                                        </li>

                                    </ul>
                                </div>
                                <div id="user" class="tab-pane notika-tab-menu-bg animated flipInX">
                                    <ul class="notika-main-menu-dropdown">
                                        <li><a href="/employeeRegistration">Create User</a>
                                        </li>
                                        <li><a href="/userRights">UserManagement</a>
                                        </li>

                                    </ul>
                                </div>

                                <div id="Invoice" class="tab-pane notika-tab-menu-bg animated flipInX">
                                    <ul class="notika-main-menu-dropdown">
                                        <li><a href="/invoice">Create Invoice</a>
                                        </li>
                                        <li><a href="/viewInvoice">View Invoice</a>
                                        </li>

                                    </ul>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}