import React from 'react'



const Footer = () => {
    return (
        <div className='absolute bottom-0 w-full px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row'>
            <div className='flex flex-row justify-between items-center m-2'>
                <div>
                    <p className='m-2 text-sm font-bold text-gray-700'> &copy; All Rigth Reserved.</p>  
                </div>
                <div className='flex'>
                    <div className='m-2 hover:text-blue-600 text-sm font-medium text-gray-700'> <ion-icon name="logo-facebook"></ion-icon> Facebook</div>
                    <div className='m-2 hover:text-yellow-500 text-sm font-medium text-gray-700'> <ion-icon name="logo-instagram"></ion-icon> Instagram</div>
                    <div className='m-2 hover:text-blue-400 text-sm font-medium text-gray-700'><ion-icon name="logo-twitter"></ion-icon> Twitter</div>
                </div>
            </div>    
        </div>
    )
}

export default Footer

