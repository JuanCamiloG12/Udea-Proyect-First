import React, { useEffect, useState } from "react";
import { eliminarVenta, obtenerVentas } from "../../utils/api";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const consultarVentas = async () => {
      await obtenerVentas(
        (response) => {
          setVentas(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    consultarVentas();
    //console.log("ventas", ventas);
  }, []);

  const deleteVentas = async () => {
    await eliminarVenta(
      { id: ventas._id },
      (response) => {
        console.log(response.data);
        toast.success("Venta eliminada con exito");
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando venta");
      }
    );
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id ventas
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
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>

                  <th className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ventas.map((el) => {
                  return (
                    <tr key={nanoid()}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {el._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {el.fecha}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {`${el.vendedor.name} ${el.vendedor.lastname}`}
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: {el.vendedor._id}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {el.name_cliente}
                            </div>
                            <div className="text-sm text-gray-500">
                              ID: {el.id_cliente}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {el.producto.producto}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {el.cantidad}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {el.producto.valor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {parseFloat(el.cantidad) *
                          parseFloat(el.producto.valor)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <i class="far fa-check-square text-green-500 hover:text-green-200"></i>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <i
                          onClick={() => deleteVentas()}
                          className="fas fa-trash-alt text-gray-700 hover:text-gray-300"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

export default Ventas;
