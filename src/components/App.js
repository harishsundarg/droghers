import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import ContactScreen from './Screens/ContactScreen'
import FAQScreen from './Screens/FAQScreen'
import SignInScreen from './Screens/SignInScreen'
import TrackOrderScreen from './Screens/TrackOrderScreen'
import TAndCScreen from './Screens/TAndCScreen'
import MyWishListScreen from './Screens/MyWishListScreen'
import CartScreen from './Screens/CartScreen'
import CheckOutScreen from './Screens/CheckOutScreen'
import NotFoundScreen from './Screens/NotFoundScreen'
import ProductComparisonScreen from './Screens/ProductComparisonScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Route path="/" exact component={HomeScreen} />
                <Route path="/contact" exact component={ContactScreen} />
                <Route path="/faq" exact component={FAQScreen} />
                <Route path="/login" exact component={SignInScreen} />
                <Route path="/trackorder" exact component={TrackOrderScreen} />
                <Route path="/termsandconditions" exact component={TAndCScreen} />
                <Route path="/mywishlist" exact component={MyWishListScreen} />
                <Route path="/cart" exact component={CartScreen} />
                <Route path="/checkout" exact component={CheckOutScreen} />
                <Route path="/notfound" exact component={NotFoundScreen} />
                <Route path="/compareproduct" exact component={ProductComparisonScreen} />
                <Route path="/productdetail" exact component={ProductDetailScreen} />
                <br />
                <Footer />
            </Router>
        </div>
    )
}

export default App
