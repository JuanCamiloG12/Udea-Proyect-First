import React, { useEffect, useState } from "react";

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
  const [prendas, SetPrendas] = useState([]);

  useEffect(() => {
    //obtener lista prendas desde el backend
    SetPrendas(prendasBackend);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo producto");
    } else {
      setTextoBoton("Mostrar todos los productos");
    }
  }, [mostrarTabla]);

  return (
    <div>
      <h2 className="text-center text-3xl font-extrabold text-gray-800">
        Pagina administracion de productos
      </h2>
      <button
        type="button"
        onClick={() => {
          setMostrarTabla(!mostrarTabla);
        }}
        className="text-white bg-indigo-500 p-5"
      >
        {textoBoton}
      </button>
      {mostrarTabla ? (
        <TablaPrendas listaPrendas={prendas} />
      ) : (
        <FormularioCreacionPrendas />
      )}
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
    <div className="">
      <h2 className="text-center text-2xl font-extrabold text-gray-800">
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
                <td>{prendas.identificador}</td>
                <td>{prendas.producto}</td>
                <td>{prendas.valor}</td>
                <td>{prendas.estado}</td>
              </tr>
            );
          })}
         
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionPrendas = () => {
  return (
    <div Classame="flex flex-col">
      <h2 className="text-center text-2xl font-extrabold text-gray-800">
        Crear nuevo vehiculo
      </h2>
      <form className="flex w-full">
        <input
          className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        ></input>
        <input
          className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        ></input>
        <input
          className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        ></input>
        <input
          className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
          type="text"
        ></input>
        <button className="bg-green-500 p-2 rounded-full">
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Prendas;
