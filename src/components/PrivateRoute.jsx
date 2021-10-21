import{React,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading,loginWithRedirect,getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    
    const fetchAuth0Token = async ()=> {
      const accessToken = await getAccessTokenSilently({
        audience: 'Api-autenticacion-ventaPrendas-mintic',
      });
      localStorage.setItem("token",accessToken);
      
    };
    if(isAuthenticated){
      fetchAuth0Token();
    }
  
  }, [isAuthenticated,getAccessTokenSilently])

  if (isLoading) return <div class=" flex justify-center items-center">
  <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
</div>;
if(isAuthenticated){
    return loginWithRedirect ();
}
return <>{children}</>;


  /*
  return isAuthenticated ? <>{children}</>: <div role="alert">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    DENEGADO
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>!! NO ESTAS AUTORIZADO!!.</p>
    <Link to= '/'>Llevame al Home</Link>
  </div>
</div>
    
  ;
  */
};

export default PrivateRoute;
