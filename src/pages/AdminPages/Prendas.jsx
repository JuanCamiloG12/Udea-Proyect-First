<<<<<<< HEAD
import React from 'react'
import Cards from '../../components/Cards'
=======
import React, {useEffect} from 'react'

>>>>>>> e662b4d59ed68ef31d1cd498dcb22dbbe7fe430b

const Prendas = () => {
    /*
    const funcionPrueba = ()=>{
        return console.log ("hi");

    };
    useEffect(funcionPrueba,[]);
    */
   useEffect((funcionDePrueba=>{
       return console.log("hola mundo");} ),[]
   )


    return (
<<<<<<< HEAD
        <div className='h-screen'>
           Administracion de  Prendas
           <Cards />
=======
        <div className= 'mt-6 max-w-4xl p-10 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 '>
            <div className = 'mt-6 '> 
           <h2>Creacion de prendas</h2>
           </div>

           <div className = 'mt-6'> 
           <label htmlFor= 'tipo de prenda'>Tipo de prenda</label>
           <input type = 'text' placeholder = 'Tipo de prenda' id= 'tipo de prenda'  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "></input>
           </div>

           <div className = 'mt-6'> 
           <label htmlFor= 'Tallaje'>Tipo de prenda</label>
           <input type = 'text' placeholder = 'Tallaje' id ='Tallaje' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none "  ></input>
           </div>

           <div className = 'mt-6'> 
           <label htmlFor= 'Tallaje' id='Genero'>Tipo de prenda</label>
           <input type = 'text' placeholder = 'Dama o Hombre' id='Genero ' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none" ></input>
           </div>

           <div className = 'mt-6'>   
           <label htmlFor= 'Tallaje' id='Genero'>Tipo de prenda</label>
           <input type = 'number' placeholder = 'Precio' id='Genero ' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none"></input>
           </div>
           
       <div className = 'mt-6'>   
    <button className="px-8 py-2  font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
        Enviar Datos
    </button>
    </div>   
>>>>>>> e662b4d59ed68ef31d1cd498dcb22dbbe7fe430b
        </div>
    )
}

export default Prendas
