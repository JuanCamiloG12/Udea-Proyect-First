import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"


const Sidebar = () => {
    const { logout } = useAuth0();
    const cerrarSesion =()=>{
        logout({ returnTo: 'http://localhost:3000/AdminPages' })
        localStorage.setItem('token',null);

    }
    return (
        <div className='bg-gray-600'>
            Sidebar
            <button onClick={() => cerrarSesion}>
      Log Out
    </button>
        </div>
    )
}

export default Sidebar
