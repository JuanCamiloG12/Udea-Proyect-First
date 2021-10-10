import React from 'react'


const Footer = () => {
    return (
        <div className='absolute bottom-0 w-full bg-gray-700 text-white'>
            <div className='flex flex-row justify-between items-center m-2'>
                <div>
                    <p className='m-2 font-bold'> &copy; All rigth reserved.</p>  
                </div>
                <div className='flex'>
                    <div className='m-2'> <i class="fab fa-facebook-square"></i> Facebook</div>
                    <div className='m-2'>Instagram</div>
                    <div className='m-2'>Twitter</div>
                </div>
            </div>    
        </div>
    )
}

export default Footer

