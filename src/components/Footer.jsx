import React from 'react'



const Footer = () => {
    return (
        <div className='absolute bottom-0 w-full bg-gray-700 text-white'>
            <div className='flex flex-row justify-between items-center m-2'>
                <div>
                    <p className='m-2 font-bold'> &copy; All rigth reserved.</p>  
                </div>
                <div className='flex'>
                    <div className='m-2 hover:text-blue-600'> <ion-icon name="logo-facebook"></ion-icon> Facebook</div>
                    <div className='m-2 hover:text-yellow-500'> <ion-icon name="logo-instagram"></ion-icon> Instagram</div>
                    <div className='m-2 hover:text-blue-400'><ion-icon name="logo-twitter"></ion-icon> Twitter</div>
                </div>
            </div>    
        </div>
    )
}

export default Footer

