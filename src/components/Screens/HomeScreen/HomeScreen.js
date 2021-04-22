import React from 'react'
import HeroSection from './HeroSection'
import InfoBoxes from './InfoBoxes'
import NewProducts from './NewProducts'
import Sidebar from './Sidebar'
import WideProductBanner from './WideProductBanner'
import FeaturedProduct from './FeaturedProducts'
import Banner from './Banner'
import BestSeller from './BestSeller'
import NewArrival from './NewArrival'
import BrandCarousel from './BrandCarousel'

const HomeScreen = () => {
    return (
        <div>
            <div class="body-content outer-top-xs" id="top-banner-and-menu">
                <div class="container">
                    <div class="row">
                        {/* <!-- ============================================== SIDEBAR ============================================== -->	 */}
                        <Sidebar />
                        {/* <!-- ============================================== SIDEBAR : END ============================================== --></div> */}
                        {/* <!-- ============================================== CONTENT ============================================== --> */}
                        <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
                            {/* <!-- ========================================== SECTION – HERO ========================================= -->*/}
                            <HeroSection />
                            {/* <!-- ========================================= SECTION – HERO : END ========================================= -->*/}

                            {/* <!-- ============================================== INFO BOXES ============================================== --> */}
                            <InfoBoxes />
                            {/* <!-- ============================================== INFO BOXES : END ============================================== --> */}
                            {/* <!-- ============================================== SCROLL TABS ============================================== --> */}
                            <NewProducts />
                            {/* <!-- ============================================== SCROLL TABS : END ============================================== --> */}

                            {/* <!-- ============================================== WIDE PRODUCTS ============================================== --> */}
                            <WideProductBanner />
                            {/* <!-- ============================================== WIDE PRODUCTS : END ============================================== --> */}

                            {/* <!-- ============================================== FEATURED PRODUCTS ============================================== --> */}
                            <FeaturedProduct />
                            {/* <!-- ============================================== FEATURED PRODUCTS : END ============================================== --> */}
                            {/* <!-- ============================================== WIDE PRODUCTS ============================================== --> */}
                            <Banner />
                            {/* <!-- ============================================== WIDE PRODUCTS : END ============================================== --> */}
                            {/* <!-- ============================================== BEST SELLER ============================================== --> */}
                            <BestSeller />
                            {/* <!-- ============================================== BEST SELLER : END ============================================== --> */}

                            {/* <!-- ============================================== New Arrivals ============================================== --> */}
                            <NewArrival />
                            {/* <!-- ============================================== New Arrivals : END ============================================== --> */}

                        </div>
                        {/* <!-- /.homebanner-holder --> */}
                    </div>
                    {/* <!-- /.row --> */}
                    {/* <!-- ============================================== CONTENT : END ============================================== --> */}

                    {/* <!-- ============================================== BRANDS CAROUSEL ============================================== --> */}
                    <BrandCarousel />
                    {/* <!-- ============================================== BRANDS CAROUSEL : END ============================================== --> */}
                </div>
                {/* <!-- /.container --> */}
            </div>
            {/* <!-- /#top-banner-and-menu --> */}
        </div >
    )
}

export default HomeScreen