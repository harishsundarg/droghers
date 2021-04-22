import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            {/* <!-- ============================================== NAVBAR ============================================== --> */}
            <div class="header-nav animate-dropdown" style={{ backgroundColor: "#042417" }}>
                <div class="container">
                    <div class="yamm navbar navbar-default" role="navigation">
                        <div class="navbar-header">
                            <button data-target="/#mc-horizontal-menu-collapse" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="nav-bg-class">
                            <div class="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                                <div class="nav-outer">
                                    <ul class="nav navbar-nav">
                                        <li class="active dropdown yamm-fw">
                                            <a href="home.html" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Home</a>
                                        </li>
                                        <li class="dropdown yamm mega-menu">
                                            <a href="home.html" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Staples</a>
                                            <ul class="dropdown-menu container">
                                                <li>
                                                    <div class="yamm-content ">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                <h2 class="title">Men</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Dresses</a></li>
                                                                    <li><a href="/#">Shoes </a></li>
                                                                    <li><a href="/#">Jackets</a></li>
                                                                    <li><a href="/#">Sunglasses</a></li>
                                                                    <li><a href="/#">Sport Wear</a></li>
                                                                    <li><a href="/#">Blazers</a></li>
                                                                    <li><a href="/#">Shirts</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                <h2 class="title">Women</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Handbags</a></li>
                                                                    <li><a href="/#">Jwellery</a></li>
                                                                    <li><a href="/#">Swimwear </a></li>
                                                                    <li><a href="/#">Tops</a></li>
                                                                    <li><a href="/#">Flats</a></li>
                                                                    <li><a href="/#">Shoes</a></li>
                                                                    <li><a href="/#">Winter Wear</a></li>

                                                                </ul>
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                <h2 class="title">Boys</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Toys & Games</a></li>
                                                                    <li><a href="/#">Jeans</a></li>
                                                                    <li><a href="/#">Shirts</a></li>
                                                                    <li><a href="/#">Shoes</a></li>
                                                                    <li><a href="/#">School Bags</a></li>
                                                                    <li><a href="/#">Lunch Box</a></li>
                                                                    <li><a href="/#">Footwear</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                                <h2 class="title">Girls</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Sandals </a></li>
                                                                    <li><a href="/#">Shorts</a></li>
                                                                    <li><a href="/#">Dresses</a></li>
                                                                    <li><a href="/#">Jwellery</a></li>
                                                                    <li><a href="/#">Bags</a></li>
                                                                    <li><a href="/#">Night Dress</a></li>
                                                                    <li><a href="/#">Swim Wear</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-xs-12 col-sm-6 col-md-4 col-menu banner-image">
                                                                <img class="img-responsive" src="assets/images/banners/top-menu-banner.jpg" alt="" />
                                                            </div>
                                                            {/* <!-- /.yamm-content -->					 */}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown mega-menu">
                                            <a href="category.html" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown">Snacks&Beverages
                                            <span class="menu-label hot-menu hidden-xs">hot</span>
                                            </a>
                                            <ul class="dropdown-menu container">
                                                <li>
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                <h2 class="title">Laptops</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Gaming</a></li>
                                                                    <li><a href="/#">Laptop Skins</a></li>
                                                                    <li><a href="/#">Apple</a></li>
                                                                    <li><a href="/#">Dell</a></li>
                                                                    <li><a href="/#">Lenovo</a></li>
                                                                    <li><a href="/#">Microsoft</a></li>
                                                                    <li><a href="/#">Asus</a></li>
                                                                    <li><a href="/#">Adapters</a></li>
                                                                    <li><a href="/#">Batteries</a></li>
                                                                    <li><a href="/#">Cooling Pads</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                <h2 class="title">Desktops</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Routers {"&"} Modems</a></li>
                                                                    <li><a href="/#">CPUs, Processors</a></li>
                                                                    <li><a href="/#">PC Gaming Store</a></li>
                                                                    <li><a href="/#">Graphics Cards</a></li>
                                                                    <li><a href="/#">Components</a></li>
                                                                    <li><a href="/#">Webcam</a></li>
                                                                    <li><a href="/#">Memory (RAM)</a></li>
                                                                    <li><a href="/#">Motherboards</a></li>
                                                                    <li><a href="/#">Keyboards</a></li>
                                                                    <li><a href="/#">Headphones</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                <h2 class="title">Cameras</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Accessories</a></li>
                                                                    <li><a href="/#">Binoculars</a></li>
                                                                    <li><a href="/#">Telescopes</a></li>
                                                                    <li><a href="/#">Camcorders</a></li>
                                                                    <li><a href="/#">Digital</a></li>
                                                                    <li><a href="/#">Film Cameras</a></li>
                                                                    <li><a href="/#">Flashes</a></li>
                                                                    <li><a href="/#">Lenses</a></li>
                                                                    <li><a href="/#">Surveillance</a></li>
                                                                    <li><a href="/#">Tripods</a></li>
                                                                </ul>
                                                            </div>
                                                            {/* <!-- /.col --> */}
                                                            <div class="col-xs-12 col-sm-12 col-md-2 col-menu">
                                                                <h2 class="title">Mobile Phones</h2>
                                                                <ul class="links">
                                                                    <li><a href="/#">Apple</a></li>
                                                                    <li><a href="/#">Samsung</a></li>
                                                                    <li><a href="/#">Lenovo</a></li>
                                                                    <li><a href="/#">Motorola</a></li>
                                                                    <li><a href="/#">LeEco</a></li>
                                                                    <li><a href="/#">Asus</a></li>
                                                                    <li><a href="/#">Acer</a></li>
                                                                    <li><a href="/#">Accessories</a></li>
                                                                    <li><a href="/#">Headphones</a></li>
                                                                    <li><a href="/#">Memory Cards</a></li>
                                                                </ul>
                                                            </div>
                                                            <div class="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner">
                                                                <a href="/#"><img alt="" src="assets/images/banners/banner-side.png" /></a>
                                                            </div>
                                                        </div>
                                                        {/* <!-- /.row --> */}
                                                    </div>.
                                                    {/* <!-- /.yamm-content -->					 */}
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown hidden-sm">
                                            <a href="category.html">Packaged Food
                                                <span class="menu-label new-menu hidden-xs">new</span>
                                            </a>
                                        </li>
                                        <li class="dropdown hidden-sm">
                                            <a href="category.html">Personal & Baby Care</a>
                                        </li>
                                        <li class="dropdown">
                                            <a href="contact.html">Household Care</a>
                                        </li>
                                        <li class="dropdown">
                                            <a href="contact.html">Dairy & Eggs</a>
                                        </li>
                                        <li class="dropdown">
                                            <a href="/#" class="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">More</a>
                                            <ul class="dropdown-menu pages">
                                                <li>
                                                    <div class="yamm-content">
                                                        <div class="row">
                                                            <div class="col-xs-12 col-menu">
                                                                <ul class="links">
                                                                    <li><Link to="/">Home</Link></li>
                                                                    {/* <li><Link to="category.html">Category</Link></li> */}
                                                                    <li><Link to="/productdetail">Detail</Link></li>
                                                                    <li><Link to="/cart">Shopping Cart Summary</Link></li>
                                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                                    {/* <li><Link to="blog.html">Blog</Link></li> */}
                                                                    {/* <li><Link to="blog-details.html">Blog Detail</Link></li> */}
                                                                    <li><Link to="/contact">Contact</Link></li>
                                                                    <li><Link to="/login">Sign In</Link></li>
                                                                    <li><Link to="/mywishlist">Wishlist</Link></li>
                                                                    <li><Link to="/termsandconditions">Terms and Condition</Link></li>
                                                                    <li><Link to="/trackorder">Track Orders</Link></li>
                                                                    <li><Link to="/compareproduct">Product-Comparison</Link></li>
                                                                    <li><Link to="/faq">FAQ</Link></li>
                                                                    <li><Link to="/notfound">404</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown  navbar-right special-menu">
                                            <a href="/#">Todays offer</a>
                                        </li>
                                    </ul>
                                    {/* <!-- /.navbar-nav --> */}
                                    <div class="clearfix"></div>
                                </div>
                                {/* <!-- /.nav-outer --> */}
                            </div>
                            {/* <!-- /.navbar-collapse --> */}
                        </div>
                        {/* <!-- /.nav-bg-class --> */}
                    </div>
                    {/* <!-- /.navbar-default --> */}
                </div>
                {/* <!-- /.container-class --> */}
            </div>
            {/* <!-- /.header-nav --> */}
            {/* <!-- ============================================== NAVBAR : END ============================================== --> */}
        </div>
    )
}

export default NavBar
