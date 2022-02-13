import { Navigate, Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {

  const login = useSelector(state => state.login.isLogin)

  if(login){
    return <Outlet />
  }else{
    return <Navigate to="/" />
  }
}
 
export default ProtectedRoutes;