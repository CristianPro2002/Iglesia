import React from 'react'
import Header from './Header/Header'
import Slider from './Slider/Slider'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
const index = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default index
