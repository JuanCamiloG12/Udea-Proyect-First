import React, { useEffect, useState } from "react";
import { editarVenta, eliminarVenta, obtenerVentas } from "../../utils/api";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const consultarVentas = async () => {
      await obtenerVentas(
        (response) => {
          setVentas(response.data);
          setEjecutarConsulta(false);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    consultarVentas();
    //console.log("ventas", ventas);
  }, [ejecutarConsulta]);

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

                  <th className="relative px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ventas.map((el) => {
                  return <FilaVenta key={nanoid()} el={el} setEjecutarConsulta={setEjecutarConsulta} />;
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

const FilaVenta = ({ el, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  //esta es la nueva informacion de la venta
  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
    fecha: el.fecha,
    name_cliente: el.name_cliente,
    id_cliente: el.id_cliente,
    cantidad: el.cantidad,
  });

  const actualizarVenta = async () => {

    console.log(infoNuevaVenta);
    await editarVenta(
      { ...infoNuevaVenta, id: el._id },
      (response) => {
        console.log(response.data);
        toast.success("Venta editada exitosamente");
        setEdit(false); //para cambiar el icono nuevamente del edit
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error editando venta");
      }
    );
  };

  const deleteVenta = async () => {
    await eliminarVenta(
      { id: el._id },
      (response) => {
        console.log(response.data);
        toast.success("Producto eliminado con exito");
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error eliminando producto");
      }
    );
  };

  return (
           
    <tr>
      {edit ? (
        <>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {el._id}
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="date"
              value={infoNuevaVenta.fecha}
              onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, fecha: e.target.value })
              }
            />
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {`${el.vendedor.name}`}
                </div>
                <div className="text-sm text-gray-500">
                  ID: {el.vendedor._id}
                </div>
              </div>
            </div>
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevaVenta.name_cliente}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  name_cliente: e.target.value,
                })
              }
            />
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevaVenta.id_cliente}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  id_cliente: e.target.value,
                })
              }
            />
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
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="number"
              value={infoNuevaVenta.cantidad}
              onChange={(e) =>
                setInfoNuevaVenta({
                  ...infoNuevaVenta,
                  cantidad: e.target.value,
                })
              }
            />
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {el.producto.valor}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {parseFloat(el.cantidad) * parseFloat(el.producto.valor)}
          </td>
        </>
      ) : (
        <>
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
                <div className="text-sm text-gray-500">ID: {el.id_cliente}</div>
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
            {parseFloat(el.cantidad) * parseFloat(el.producto.valor)}
          </td>
        </>
      )}

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        {edit ? (
          <i
            onClick={() => actualizarVenta()}
            className="far fa-check-square text-green-500 hover:text-green-200"
          ></i>
        ) : (
          <i
            onClick={() => setEdit(!edit)}
            className="far fa-edit text-blue-700 hover:text-blue-300"
          ></i>
        )}
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <i
          onClick={() => deleteVenta()}
          className="fas fa-trash-alt text-gray-700 hover:text-gray-300"
        ></i>
      </td>
    </tr>
    
 
    
    
  );
};

export default Ventas;
