import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const LayoutPublic = ({children}) => {
    return (
        <div >
           <Navbar />
            <main className ='flex items-center justify-center bg-blue-100 py-16 mt-16'>{children}</main>            
            <Footer />
            </div>
        
    )
}

export default LayoutPublic


