import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const LayoutPublic = ({children}) => {
    return (
        <div className=' flex flex-col justify-between h-screen'>
            <Navbar />
            <main className= 'h-full overflow'>{children}</main>             
            <Footer/>              
        </div>
    )
}

export default LayoutPublic


