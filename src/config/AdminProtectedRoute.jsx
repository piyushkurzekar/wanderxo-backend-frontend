import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const admin = JSON.parse(
    sessionStorage.getItem("admin")
  );

  if (!admin || !admin.isLoggedIn) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminProtectedRoute;
