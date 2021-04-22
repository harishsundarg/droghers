import React from 'react'
import HotDeals from '../ProductDetailScreen/HotDeals'
import NewsLetter from './NewsLetter'
import ProductTags from './ProductTags'
import SpecialDeals from './SpecialDeals'
import SpecialOffers from './SpecialOffers'
import Testimonials from './Testimonials'

const Sidebar = () => {
    return (
        <div>
            {/* <!-- ============================================== SIDEBAR ============================================== -->	 */}
            <div class="col-xs-12 col-sm-12 col-md-3 sidebar">
                {/* <!-- ================================== TOP NAVIGATION ================================== --> */}
                <div class="side-menu animate-dropdown outer-bottom-xs">
                    <div class="head"><i class="icon fa fa-align-justify fa-fw"></i> Categories</div>
                    <nav class="yamm megamenu-horizontal" role="navigation">
                        <ul class="nav">
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-shopping-bag" aria-hidden="true"></i>Fruits & Vegetables</a>
                                <ul class="dropdown-menu mega-menu">
                                    <li class="yamm-content">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Dresses</a></li>
                                                    <li><a href="/#">Shoes </a></li>
                                                    <li><a href="/#">Jackets</a></li>
                                                    <li><a href="/#">Sunglasses</a></li>
                                                    <li><a href="/#">Sport Wear</a></li>
                                                    <li><a href="/#">Blazers</a></li>
                                                    <li><a href="/#">Shirts</a></li>
                                                    <li><a href="/#">Shorts</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Handbags</a></li>
                                                    <li><a href="/#">Jwellery</a></li>
                                                    <li><a href="/#">Swimwear </a></li>
                                                    <li><a href="/#">Tops</a></li>
                                                    <li><a href="/#">Flats</a></li>
                                                    <li><a href="/#">Shoes</a></li>
                                                    <li><a href="/#">Winter Wear</a></li>
                                                    <li><a href="/#">Night Suits</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Toys &amp; Games</a></li>
                                                    <li><a href="/#">Jeans</a></li>
                                                    <li><a href="/#">Shirts</a></li>
                                                    <li><a href="/#">Shoes</a></li>
                                                    <li><a href="/#">School Bags</a></li>
                                                    <li><a href="/#">Lunch Box</a></li>
                                                    <li><a href="/#">Footwear</a></li>
                                                    <li><a href="/#">Wipes</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Sandals </a></li>
                                                    <li><a href="/#">Shorts</a></li>
                                                    <li><a href="/#">Dresses</a></li>
                                                    <li><a href="/#">Jwellery</a></li>
                                                    <li><a href="/#">Bags</a></li>
                                                    <li><a href="/#">Night Dress</a></li>
                                                    <li><a href="/#">Swim Wear</a></li>
                                                    <li><a href="/#">Toys</a></li>

                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                        </div>
                                        {/* <!-- /.row --> */}
                                    </li>
                                    {/* <!-- /.yamm-content -->s*/}
                                </ul>
                                {/* <!-- /.dropdown-menu -->*/}
                            </li>
                            {/* <!-- /.menu-item --> */}
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-laptop" aria-hidden="true"></i>Foodgrains, Oil & Masala</a>
                                {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}
                                <ul class="dropdown-menu mega-menu">
                                    <li class="yamm-content">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-lg-4">
                                                <ul>
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
                                            <div class="col-xs-12 col-sm-12 col-lg-4">
                                                <ul>
                                                    <li><a href="/#">Routers &amp; Modems</a></li>
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
                                            <div class="dropdown-banner-holder">
                                                <a href="/#"><img alt="" src="assets/images/banners/banner-side.png" /></a>
                                            </div>
                                        </div>
                                        {/* <!-- /.row --> */}
                                    </li>
                                    {/* <!-- /.yamm-content -->*/}
                                </ul>
                                {/* <!-- /.dropdown-menu --> */}
                            </li>
                            {/* <!-- /.menu-item --> */}
                            {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}

                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-paw" aria-hidden="true"></i>Bakery, Cakes & Dairy</a>
                                <ul class="dropdown-menu mega-menu">
                                    <li class="yamm-content">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Dresses</a></li>
                                                    <li><a href="/#">Shoes </a></li>
                                                    <li><a href="/#">Jackets</a></li>
                                                    <li><a href="/#">Sunglasses</a></li>
                                                    <li><a href="/#">Sport Wear</a></li>
                                                    <li><a href="/#">Blazers</a></li>
                                                    <li><a href="/#">Shirts</a></li>
                                                    <li><a href="/#">Shorts</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Handbags</a></li>
                                                    <li><a href="/#">Jwellery</a></li>
                                                    <li><a href="/#">Swimwear </a></li>
                                                    <li><a href="/#">Tops</a></li>
                                                    <li><a href="/#">Flats</a></li>
                                                    <li><a href="/#">Shoes</a></li>
                                                    <li><a href="/#">Winter Wear</a></li>
                                                    <li><a href="/#">Night Suits</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Toys &amp; Games</a></li>
                                                    <li><a href="/#">Jeans</a></li>
                                                    <li><a href="/#">Shirts</a></li>
                                                    <li><a href="/#">Shoes</a></li>
                                                    <li><a href="/#">School Bags</a></li>
                                                    <li><a href="/#">Lunch Box</a></li>
                                                    <li><a href="/#">Footwear</a></li>
                                                    <li><a href="/#">Wipes</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Sandals </a></li>
                                                    <li><a href="/#">Shorts</a></li>
                                                    <li><a href="/#">Dresses</a></li>
                                                    <li><a href="/#">Jwellery</a></li>
                                                    <li><a href="/#">Bags</a></li>
                                                    <li><a href="/#">Night Dress</a></li>
                                                    <li><a href="/#">Swim Wear</a></li>
                                                    <li><a href="/#">Toys</a></li>

                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                        </div>
                                        {/* <!-- /.row --> */}
                                    </li>
                                    {/* <!-- /.yamm-content -->*/}
                                </ul>
                                {/* <!-- /.dropdown-menu -->*/}
                            </li>
                            {/* <!-- /.menu-item --> */}
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-clock-o"></i>Beverages</a>
                                <ul class="dropdown-menu mega-menu">
                                    <li class="yamm-content">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-lg-4">
                                                <ul>
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
                                            <div class="col-xs-12 col-sm-12 col-lg-4">
                                                <ul>
                                                    <li><a href="/#">Routers &amp; Modems</a></li>
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
                                            <div class="dropdown-banner-holder">
                                                <a href="/#"><img alt="" src="assets/images/banners/banner-side.png" /></a>
                                            </div>
                                        </div>
                                        {/* <!-- /.row --> */}
                                    </li>
                                    {/* <!-- /.yamm-content -->*/}
                                </ul>
                                {/* <!-- /.dropdown-menu -->            */}
                            </li>
                            {/* <!-- /.menu-item --> */}
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-diamond"></i>Snacks & Branded Foods</a>
                                <ul class="dropdown-menu mega-menu">
                                    <li class="yamm-content">
                                        <div class="row">
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Dresses</a></li>
                                                    <li><a href="/#">Shoes </a></li>
                                                    <li><a href="/#">Jackets</a></li>
                                                    <li><a href="/#">Sunglasses</a></li>
                                                    <li><a href="/#">Sport Wear</a></li>
                                                    <li><a href="/#">Blazers</a></li>
                                                    <li><a href="/#">Shirts</a></li>
                                                    <li><a href="/#">Shorts</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Handbags</a></li>
                                                    <li><a href="/#">Jwellery</a></li>
                                                    <li><a href="/#">Swimwear </a></li>
                                                    <li><a href="/#">Tops</a></li>
                                                    <li><a href="/#">Flats</a></li>
                                                    <li><a href="/#">Shoes</a></li>
                                                    <li><a href="/#">Winter Wear</a></li>
                                                    <li><a href="/#">Night Suits</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Toys &amp; Games</a></li>
                                                    <li><a href="/#">Jeans</a></li>
                                                    <li><a href="/#">Shirts</a></li>
                                                    <li><a href="/#">Shoes</a></li>
                                                    <li><a href="/#">School Bags</a></li>
                                                    <li><a href="/#">Lunch Box</a></li>
                                                    <li><a href="/#">Footwear</a></li>
                                                    <li><a href="/#">Wipes</a></li>
                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                            <div class="col-sm-12 col-md-3">
                                                <ul class="links list-unstyled">
                                                    <li><a href="/#">Sandals </a></li>
                                                    <li><a href="/#">Shorts</a></li>
                                                    <li><a href="/#">Dresses</a></li>
                                                    <li><a href="/#">Jwellery</a></li>
                                                    <li><a href="/#">Bags</a></li>
                                                    <li><a href="/#">Night Dress</a></li>
                                                    <li><a href="/#">Swim Wear</a></li>
                                                    <li><a href="/#">Toys</a></li>

                                                </ul>
                                            </div>
                                            {/* <!-- /.col --> */}
                                        </div>
                                        {/* <!-- /.row --> */}
                                    </li>
                                    {/* <!-- /.yamm-content -->*/}
                                </ul>
                                {/* <!-- /.dropdown-menu --> */}
                            </li>
                            {/* <!-- /.menu-item --> */}
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-heartbeat"></i>Beauty & Hygiene</a>
                                <ul class="dropdown-menu mega-menu">
                                    <li class="yamm-content">
                                        <div class="row">
                                            <div class="col-xs-12 col-sm-12 col-lg-4">
                                                <ul>
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
                                            <div class="col-xs-12 col-sm-12 col-lg-4">
                                                <ul>
                                                    <li><a href="/#">Routers &amp; Modems</a></li>
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
                                            <div class="dropdown-banner-holder">
                                                <a href="/#"><img alt="" src="assets/images/banners/banner-side.png" /></a>
                                            </div>
                                        </div>
                                        {/* <!-- /.row --> */}
                                    </li>
                                    {/* <!-- /.yamm-content -->*/}
                                </ul>
                                {/* <!-- /.dropdown-menu -->             */}
                            </li>
                            {/* <!-- /.menu-item --> */}
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-paper-plane"></i>Cleaning & Household</a>
                                {/* <!-- /.dropdown-menu -->             */}
                            </li>
                            {/* <!-- /.menu-item --> */}
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-futbol-o"></i>Kitchen, Garden & Pets</a>
                            </li>
                            {/* <!-- /.menu-item --> */}
                            {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}
                            {/* <!-- /.dropdown-menu --> */}
                            {/* <!-- ================================== MEGAMENU VERTICAL ================================== -->*/}
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-envira"></i>Eggs, Meats & Fish</a>
                                {/* <!-- /.dropdown-menu -->             */}
                            </li>
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-envira"></i>Gourmet & World Food</a>
                                {/* <!-- /.dropdown-menu -->             */}
                            </li>
                            <li class="dropdown menu-item">
                                <a href="/#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon fa fa-envira"></i>Baby Care</a>
                                {/* <!-- /.dropdown-menu -->             */}
                            </li>
                            {/* <!-- /.menu-item --> */}
                        </ul>
                        {/* <!-- /.nav --> */}
                    </nav>
                    {/* <!-- /.megamenu-horizontal --> */}
                </div>
                {/* <!-- /.side-menu --> */}
                {/* <!-- ================================== TOP NAVIGATION : END ================================== --> */}

                <HotDeals />
                <SpecialOffers />
                <ProductTags />
                <SpecialDeals />
                <NewsLetter />
                <Testimonials />
                {/* <!-- ============================================== SIDEBAR : END ============================================== --></div> */}
            </div>
        </div>
    )
}

export default Sidebar
