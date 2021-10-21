import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PrivateRoute from '../components/PrivateRoute'
import Sidebar from '../components/Sidebar'


const LayoutPrivate = ({children}) => {
    return (
        <PrivateRoute>        
        <div>
           
            <Navbar />
            <main className ='flex items-center justify-center bg-red-400 py-16 mt-16'>{children}</main>            
            <Footer />   
            
            
        </div>
        </PrivateRoute>
    )
}

export default LayoutPrivate
