import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ role, children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  const userRole = userInfo.role;

  if (!userRole || userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
