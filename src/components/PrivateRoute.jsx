import React,{useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerDatosUsuario } from '../utils/api';

// 1. PEDIR TOKEN A AUTH0
const PrivateRoute = ({children}) => {
  const { user, isAuthenticated, isLoading,getAccessTokenSilently } = useAuth0();
  useEffect(()=>{
    const fetchAuth0Token = async ()=> {
      const accessToken= await getAccessTokenSilently({
        audience:`Api-autenticacion-ventaPrendas-mintic`,
      });
  // 2. RECIBIR TOKEN DE AUTH0
      localStorage.setItem("token",accessToken)
      //3. ENVIARLE EL TOKEN AL BACKEND
      await obtenerDatosUsuario(
        (response)=>{
          console.log('response ', response);
                  },
                  (err)=>{
                    console.log('err ', err)
                  }

      )
    };
    if(isAuthenticated){
    fetchAuth0Token();
    }
  },[isAuthenticated,getAccessTokenSilently]);

  if (isLoading) return <div>Loading ...</div>;
  
  return isAuthenticated ? <>{children}</>:<div>No estas autorizado</div>
}

export default PrivateRoute;
