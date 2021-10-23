import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import axios from "axios";
import { nanoid } from "nanoid";
import {
  obtenerPrendas,
  crearPrendas,
  editarPrendas,
  eliminarPrendas
} from "../../utils/api";

const Prendas = () => {
  
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo producto");
  const [prendas, setPrendas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    if (ejecutarConsulta) {
      obtenerPrendas(
        (response) => {
          setPrendas(response.data);
          setEjecutarConsulta(false); //mirar SI ESTA BIEN PUESTO
        },
        (error) => {
          console.error(error);
        }
      );
    }
    setEjecutarConsulta(false); //mirar SI ESTA BIEN PUESTO
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista prendas desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    //Para cambiar el texto del boton
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo producto");
    } else {
      setTextoBoton("Mostrar todos los productos");
    }
  }, [mostrarTabla]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col w-full">
        <h2 className="text-center text-3xl font-extrabold text-gray-800">
          Pagina administracion de productos
        </h2>
        <button
          type="button"
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className="text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end"
        >
          {textoBoton}
        </button>
      </div>

      {mostrarTabla ? (
        <TablaPrendas
          listaPrendas={prendas}
          setEjecutarConsulta={setEjecutarConsulta}
        />
      ) : (
        <FormularioCreacionPrendas
          setMostrarTabla={setMostrarTabla}
          listaPrendas={prendas}
          setPrendas={setPrendas}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaPrendas = ({ listaPrendas, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState("");
  const [prendasFiltradas, setPrendasFiltradas] = useState(listaPrendas);

  useEffect(() => {
    setPrendasFiltradas(
      listaPrendas.filter((elemento) => {
        return JSON.stringify(elemento)
          .toLowerCase()
          .includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaPrendas]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar"
        className="border 2 border-gray-700 px-3 py-1 self-start rounded-md"
      />
      <h2 className="text-center text-2xl font-extrabold text-gray-800 p-5">
        Todos los productos
      </h2>

      <table className=" w-full items-justify-left border-2">
        <thead>
          <tr>
            <th className="text-left border-gray-800 border-2 py-3 bg-green-400 text-white">
              Identificador
            </th>
            <th className="text-left border-gray-800 border-2 py-3 bg-green-400 text-white">
              Producto
            </th>
            <th className="text-left border-gray-800 border-2 py-3 bg-green-400 text-white">
              Valor unitario
            </th>
            <th className="text-left border-gray-800 border-2 py-3 bg-green-400 text-white">
              Estado
            </th>
            <th className="text-left border-gray-800 border-2 py-3 bg-green-400 text-white">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {prendasFiltradas.map((prendas) => {
            return (
              <FilaPrendas
                key={nanoid()}
                prendas={prendas}
                setEjecutarConsulta={setEjecutarConsulta}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaPrendas = ({ prendas, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [infoNuevaPrenda, setInfoNuevaPrenda] = useState({
    // identificador: prendas.identificador,
    id: prendas._id,
    producto: prendas.producto,
    valor: prendas.valor,
    estado: prendas.estado,
  });

  const actualizarPrenda = async () => {
    console.log(infoNuevaPrenda);

    //enviar informacion al backend de

    await editarPrendas(
      { ...infoNuevaPrenda, id: prendas._id },
      (response) => {
        console.log(response.data);
        toast.success("Producto editado exitosamente");
        setEdit(false); //para cambiar el icono nuevamente del edit
        setEjecutarConsulta(true);
      },
      (error) => {
        console.error(error);
        toast.error("Error editando producto");
      }
    );
  };

  const eliminarPrenda = async () => {
    await eliminarPrendas(
      { id: prendas._id },
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
          <td>{infoNuevaPrenda.id} </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="text"
              value={infoNuevaPrenda.producto}
              onChange={(e) =>
                setInfoNuevaPrenda({
                  ...infoNuevaPrenda,
                  producto: e.target.value,
                })
              }
            />
          </td>
          <td>
            <input
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              type="number"
              value={infoNuevaPrenda.valor}
              onChange={(e) =>
                setInfoNuevaPrenda({
                  ...infoNuevaPrenda,
                  valor: e.target.value,
                })
              }
            />
          </td>
          <td>
            <select
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              defaultValue={infoNuevaPrenda.estado}
              onChange={(e) =>
                setInfoNuevaPrenda({
                  ...infoNuevaPrenda,
                  estado: e.target.value,
                })
              }
            >
              <option>Disponible</option>
              <option>No disponible</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td className="text-left border-gray-800 border-2 bg-white">
            {prendas._id}
          </td>
          <td className="text-left border-gray-800 border-2 bg-white">
            {prendas.producto}
          </td>
          <td className="text-left border-gray-800 border-2 bg-white">
            {prendas.valor}
          </td>
          <td className="text-left border-gray-800 border-2 bg-white">
            {prendas.estado}
          </td>
        </>
      )}

      <td className="border-gray-800 border-2 bg-white">
        <div className="flex w-full justify-around">
          {edit ? (
            <i
              onClick={() => actualizarPrenda()}
              className="far fa-check-square text-green-500 hover:text-green-200"
            ></i>
          ) : (
            <i
              //Renderizacion condicional para cambiar el boton
              onClick={() => setEdit(!edit)}
              className="far fa-edit text-blue-700 hover:text-blue-300"
            ></i>
          )}

          <i
            onClick={() => eliminarPrenda()}
            className="fas fa-trash-alt text-gray-700 hover:text-gray-300"
          ></i>
        </div>
      </td>
    </tr>
  );
};

const FormularioCreacionPrendas = ({
  setMostrarTabla,
  listaPrendas,
  setPrendas,
}) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    //cada vez que se use el boton agregar
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaPrenda = {};
    fd.forEach((value, key) => {
      nuevaPrenda[key] = value;
    });

    await crearPrendas(
      {
        producto: nuevaPrenda.producto,
        valor: nuevaPrenda.valor,
        estado: nuevaPrenda.estado,
      },
      (response) => {
        console.log(response.data);
        toast.success("producto agregado con exito");
      },
      (error) => {
        console.error(error);
        toast.error("error creando producto");
      }
    );

    setMostrarTabla(true);
    setPrendas([...listaPrendas, nuevaPrenda]); //Para agregar el producto nuevo
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo vehiculo
      </h2>
      <form ref={form} onSubmit={submitForm} className="flex flex-col">
        {/* <label className="flex flex-col" htmlFor="identificador">
          Identificador
          <input
            name="identificador"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            placeholder="Id. producto"
            required
          />
        </label> */}

        <label className="flex flex-col" htmlFor="producto">
          Descripcion producto
          <input
            name="producto"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            placeholder="Producto"
            required
          />
        </label>

        <label className="flex flex-col" htmlFor="valor">
          Valor unitario
          <input
            name="valor"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={0}
            placeholder="Valor x unidad"
            required
          />
        </label>

        <label className="flex flex-col" htmlFor="estado">
          Estado
          <select
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            name="estado"
            defaultValue=""
            required
          >
            <option disabled value="">
              Seleccione una opción
            </option>
            <option>Disponible</option>
            <option>No disponible</option>
          </select>
        </label>

        <button
          type="submit"
          className="col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white"
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default Prendas;
