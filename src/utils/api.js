import axios from "axios";
const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerPrendas = async (successCallback, errorCallback) => { 
  const options = {
   method: "GET",
   url: "http://localhost:5000/prendas" ,
   headers:{
     Authorization: getToken(),
   },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/prendas/nuevo",
    headers: { "Content-Type": "application/json", Authorization: getToken(),  },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:5000/prendas/editar",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data, //: {...infoNuevaPrenda,id: prendas._id},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: "http://localhost:5000/prendas/eliminar",
    headers: { "Content-Type": "application/json", Authorization: getToken(), },
    data, //: { id: prendas._id },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CRUD PARA USUARIOS


//CRUD PARA VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/ventas/nuevo",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/ventas",
  headers:{
    Authorization: getToken(),
  },
 };

  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:5000/ventas/editar",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: "http://localhost:5000/ventas/eliminar",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
