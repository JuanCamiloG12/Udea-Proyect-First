import axios from "axios";

export const obtenerPrendas = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/prendas" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/prendas/nuevo",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:5000/prendas/editar",
    headers: { "Content-Type": "application/json" },
    data, //: {...infoNuevaPrenda,id: prendas._id},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: "http://localhost:5000/prendas/eliminar",
    headers: { "Content-Type": "application/json" },
    data, //: { id: prendas._id },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/usuarios" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

//CRUD PARA VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "POST",
    url: "http://localhost:5000/ventas/nuevo",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerVentas = async (successCallback, errorCallback) => {
  const options = { method: "GET", url: "http://localhost:5000/ventas" };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: "http://localhost:5000/ventas/eliminar",
    headers: { "Content-Type": "application/json" },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
