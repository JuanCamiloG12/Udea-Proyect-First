import axios from "axios";
const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerPrendas = async (successCallback, errorCallback) => { 
  const options = {
   method: "GET",
   url: "https://safe-lake-18043.herokuapp.com/prendas" ,
   headers:{
     Authorization: getToken(),
   },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "https://safe-lake-18043.herokuapp.com/prendas/nuevo",
    headers: { "Content-Type": "application/json", Authorization: getToken(),  },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: "https://safe-lake-18043.herokuapp.com/prendas/editar",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data, //: {...infoNuevaPrenda,id: prendas._id},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: "https://safe-lake-18043.herokuapp.com/prendas/eliminar",
    headers: { "Content-Type": "application/json", Authorization: getToken(), },
    data, //: { id: prendas._id },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://safe-lake-18043.herokuapp.com/usuarios',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'https://safe-lake-18043.herokuapp.com/usuarios/self',
    headers: {
      Authorization: getToken(), // 3. enviarle el token a backend
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `https://safe-lake-18043.herokuapp.com/usuarios/${id}/`,
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
    url: "https://safe-lake-18043.herokuapp.com/ventas/nuevo",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "https://safe-lake-18043.herokuapp.com/ventas",
  headers:{
    Authorization: getToken(),
  },
 };

  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: "https://safe-lake-18043.herokuapp.com/ventas/editar",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: "https://safe-lake-18043.herokuapp.com/ventas/eliminar",
    headers: { "Content-Type": "application/json",Authorization: getToken(), },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
