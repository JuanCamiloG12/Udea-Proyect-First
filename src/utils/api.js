import axios from "axios";
const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerPrendas = async (successCallback, errorCallback) => {
  const options = {
   method: "GET",
   url: "http://localhost:5000/prendas" ,
   headers:{
     Authotization: getToken(),
   },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearPrendas = async (data, successCallback, errorCallback) => {
    const options = {
        method: "POST",
        url: "http://localhost:5000/prendas/nuevo",
        headers: { "Content-Type": "application/json", Authotization: getToken(), },
        data,
      };
    await axios.request(options).then(successCallback).catch(errorCallback);
};

export const editarPrendas = async (data,successCallback, errorCallback) => {
  const options = {
    method: "PATCH",
    url: "http://localhost:5000/prendas/editar",
    headers: { "Content-Type": "application/json" , Authotization: getToken(),},
    data,//: {...infoNuevaPrenda,id: prendas._id},
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarPrendas = async (data, successCallback, errorCallback) => {
  const options = {
    method: "DELETE",
    url: "http://localhost:5000/prendas/eliminar",
    headers: { "Content-Type": "application/json", Authotization: getToken(), },
    data, //: { id: prendas._id },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

