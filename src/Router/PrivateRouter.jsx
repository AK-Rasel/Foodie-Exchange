import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Hooks/useAuthContext";
import PropType from "prop-types";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useAuthContext();
  const location = useLocation();

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
PrivateRouter.propTypes = {
  children: PropType.node,
};
export default PrivateRouter;
