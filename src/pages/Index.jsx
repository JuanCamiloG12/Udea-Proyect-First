import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            Hola, desde el index 
            <button>
                <Link to ='/Login'>Login</Link>
            </button>
        </div>
    )
}

export default Index

