import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const prendasBackend = [
  {
    identificador: "1",
    producto: "Tenis",
    valor: 150000,
    estado: "Disponible",
  },
  {
    identificador: "2",
    producto: "jean",
    valor: 100000,
    estado: "No disponible",
  },
  {
    identificador: "3",
    producto: "Camisa",
    valor: 80000,
    estado: "Disponible",
  },
  {
    identificador: "4",
    producto: "Medias",
    valor: 20000,
    estado: "No Disponible",
  },
];

const Prendas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo producto");
  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    //obtener lista prendas desde el backend
    setPrendas(prendasBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo producto");
    } else {
      setTextoBoton("Mostrar todos los productos");
    }
  }, [mostrarTabla]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <h2 className="text-center text-3xl font-extrabold text-gray-800">
        Pagina administracion de productos
      </h2>
      <button
        type="button"
        onClick={() => {
          setMostrarTabla(!mostrarTabla);
        }}
        className="text-white bg-indigo-500 p-5 rounded-full"
      >
        {textoBoton}
      </button>
      {mostrarTabla ? (
        <TablaPrendas listaPrendas={prendas} />
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

const TablaPrendas = ({ listaPrendas }) => {
  useEffect(() => {
    console.log(
      "este es el estado de las prendas en el componente de tabla",
      listaPrendas
    );
  }, [listaPrendas]);

  return (
    <div>
      <h2 className="text-center text-2xl font-extrabold text-gray-800 p-5">
        Todos los productos
      </h2>
      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Producto</th>
            <th>Valor unitario</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {listaPrendas.map((prendas) => {
            return (
              <tr>
                <td className="text-center">{prendas.identificador}</td>
                <td className="text-center">{prendas.producto}</td>
                <td className="text-center">{prendas.valor}</td>
                <td className="text-center">{prendas.estado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionPrendas = ({
  setMostrarTabla,
  listaPrendas,
  setPrendas,
}) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd= new FormData(form.current);

    const nuevaPrenda = {};
    fd.forEach((value,key) => {
      nuevaPrenda[key] = value;
    });
    setMostrarTabla(true);
    toast.success("vehiculo agregado con exito");
    setPrendas([...listaPrendas,nuevaPrenda]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo vehiculo
      </h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className="flex flex-col" htmlFor="identificador">
          Identificador
          <input
            name="identificador"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            placeholder="Id. producto"
            required
          />
        </label>
        
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

        <label className='flex flex-col' htmlFor='estado'>
          Estado
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='estado'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Disponible</option>
            <option>No disponible</option>
          </select>
        </label>

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
};

        
        

export default Prendas;
