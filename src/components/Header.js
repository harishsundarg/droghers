import React from 'react'
import MainHeader from './MainHeader'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header class="header-style-1" style={{ backgroundColor: "#042417" }}>
                {/* <!-- ============================================== TOP MENU ============================================== --> */}
                <div class="top-bar animate-dropdown">
                    <div class="container">
                        <div class="header-top-inner">
                            <div class="cnt-account">
                                <ul class="list-unstyled">
                                    <li><a href="/#"><i class="icon fa fa-user"></i>My Account</a></li>
                                    <li><Link to="/mywishlist"><i class="icon fa fa-heart"></i>Wishlist</Link></li>
                                    <li><Link to="/cart"><i class="icon fa fa-shopping-cart"></i>My Cart</Link></li>
                                    <li><Link to="/checkout"><i class="icon fa fa-check"></i>Checkout</Link></li>
                                    <li><Link to="/login"><i class="icon fa fa-lock"></i>Login</Link></li>
                                </ul>
                            </div>
                            {/* <!-- /.cnt-account --> */}

                            <div class="cnt-block">
                                {/* <ul class="list-unstyled list-inline">
                                    <li class="dropdown dropdown-small">
                                        <a href="/#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span class="value">USD </span><b class="caret"></b></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/#">USD</a></li>
                                            <li><a href="/#">INR</a></li>
                                            <li><a href="/#">GBP</a></li>
                                        </ul>
                                    </li>

                                    <li class="dropdown dropdown-small">
                                        <a href="/#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span class="value">English </span><b class="caret"></b></a>
                                        <ul class="dropdown-menu">
                                            <li><a href="/#">English</a></li>
                                            <li><a href="/#">French</a></li>
                                            <li><a href="/#">German</a></li>
                                        </ul>
                                    </li>
                                </ul> */}
                                {/* <!-- /.list-unstyled --> */}
                            </div>
                            {/* <!-- /.cnt-cart --> */}
                            <div class="clearfix"></div>
                        </div>
                        {/* <!-- /.header-top-inner --> */}
                    </div>
                    {/* <!-- /.container --> */}
                </div>
                {/* <!-- /.header-top --> */}
                {/* <!-- ============================================== TOP MENU : END ============================================== --> */}
                <MainHeader />
                <NavBar />
            </header>
        </div>
    )
}

export default Header
