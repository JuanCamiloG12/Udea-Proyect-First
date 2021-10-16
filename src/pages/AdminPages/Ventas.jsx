import React from 'react'

const Ventas = () => {
    return (
       
        <div className="flex flex-col h-screen">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Venta Numero
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Fecha de Venta
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vendedor
                      </th>                      
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Producto
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cantidad
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Precio Unitario
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      
                     
                      <th className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>

                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        0001
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        16/Oct/2021
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Pepito Perez
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Confecciones UDC
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Producto 1
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 25.000
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 25.000
                      </td>

                      
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                      </td>

                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        0002
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        03/Oct/2021
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Cristiano Ronaldo
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Confecciones 2
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Producto 2
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 30.000
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 30.000
                      </td>

                      
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                      </td>

                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        0003
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        10/Oct/2021
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Juan Camilo
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Prueba 3
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Producto 3
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 45.000
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 45.000
                      </td>

                      
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                      </td>

                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        0004
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        16/Sep/2021
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Fulanito de Tal
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Confecciones UDA
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Producto 4
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 35.000
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 35.000
                      </td>

                      
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                      </td>

                    </tr>

                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        0005
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        12/Oct/2021
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Leonel Messi
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Confecciones 123
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Producto 5
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: xxxx
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        1
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 20.000
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        $COP 20.000
                      </td>

                      
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Editar</a>
                      </td>

                    </tr>


                    {/* <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Jane Cooper
                            </div>
                            <div className="text-sm text-gray-500">
                              jane.cooper@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                        <div className="text-sm text-gray-500">Optimization</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Admin
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>

                    
        
                    <!-- More people... --> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Ventas
