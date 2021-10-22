import React, { useEffect, useState, useRef } from "react";
import { nanoid } from "nanoid";
import { crearVenta, obtenerPrendas, obtenerUsuarios } from "../../utils/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Crearventas = () => {
  const form = useRef(null);
  const [vendedores, setVendedores] = useState([]);
  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    const consultarVendedores = async () => {
      await obtenerUsuarios(
        (response) => {
          setVendedores(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    const consultarPrendas = async () => {
      await obtenerPrendas(
        (response) => {
          setPrendas(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    consultarVendedores();
    consultarPrendas();
  }, []);

  const submitForm = async (e) => {
    //cada vez que se use el boton agregar
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
    fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    const infoConsolidada = {
      cantidad: nuevaVenta.cantidad,
      fecha: nuevaVenta.fecha,
      id_cliente: nuevaVenta.id_cliente,
      name_cliente: nuevaVenta.name_cliente,
      producto: prendas.filter((v) => v._id === nuevaVenta.producto)[0], //Para no enviar solo el dato del id al backend
      vendedor: vendedores.filter((v) => v._id === nuevaVenta.vendedor)[0],
    };

    console.log(infoConsolidada);
    await crearVenta(
      infoConsolidada,
      (response) => {
        console.log(response);
        toast.success("venta creada con exito");
      },
      (error) => {
        console.error(error);
        toast.error("error creando la venta");
      }
    );
  };

  return (
    <div>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        <h1 className="text-3xl font-extrabold text-gray-900 my-3">
          Crea nueva venta
        </h1>
        <label className="flex flex-col" htmlFor="producto">
          <span className="text-2xl font-gray-900">Productos</span>
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="producto"
            defaultValue=""
            required
          >
            <option disabled value="">
              Seleccione un producto
            </option>
            {prendas.map((el) => {
              return (
                <option key={nanoid()} value={el._id}>
                  {`${el.producto}, Valor unitario: ${el.valor}`}{" "}
                </option>
              );
            })}
          </select>
        </label>

        <label className="flex flex-col">
          <span className="text-2xl font-gray-900">Cantidad</span>
          <input
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            name="cantidad"
            min={0}
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-2xl font-gray-900">Fecha de venta</span>
          <input
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="date"
            name="fecha"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-2xl font-gray-900">Identificacion cliente</span>
          <input
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            name="id_cliente"
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="text-2xl font-gray-900">Nombre cliente</span>
          <input
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            name="name_cliente"
            required
          />
        </label>

        <label className="flex flex-col" htmlFor="vendedor">
          <span className="text-2xl font-gray-900">Vendedores</span>
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="vendedor"
            defaultValue=""
            required
          >
            <option disabled value="">
              Seleccione un vendedor
            </option>
            {vendedores.map((el) => {
              return (
                <option key={nanoid()} value={el._id}>
                  {`${el.name} ${el.lastname}`}{" "}
                </option>
              );
            })}
          </select>
        </label>

        <button
          type="submit"
          className="col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white"
        >
          Crear venta
        </button>
      </form>
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

export default Crearventas;
