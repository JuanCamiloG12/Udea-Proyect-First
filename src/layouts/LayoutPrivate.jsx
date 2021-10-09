import React from 'react'
import Sidebar from '../components/Sidebar'

const LayoutPrivate = ({children}) => {
    return (
        <div>
            <Sidebar/>
            
            {children}
            
            
        </div>
    )
}

export default LayoutPrivate
