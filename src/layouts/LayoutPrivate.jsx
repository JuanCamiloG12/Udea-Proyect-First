import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const LayoutPrivate = ({children}) => {
    return (
        <div>
            <Navbar />
            <main className ='flex w-full overflow-y-scroll'>{children}</main>            
            <Footer />           
            
        </div>
    )
}

export default LayoutPrivate
