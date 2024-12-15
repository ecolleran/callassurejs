import { useNavigate } from "react-router-dom";
import { checkUser } from "../Auth/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleGoHome = () => {
    navigate("/");  // Redirects to home page
  };

  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <div className="center container">
        <h1>You are not authorized to access this page.</h1>
        <p>Please create an account or log into your existing account.</p>
        <div className="form-row">
          <div className="form-group">
            <button onClick={handleRegister}>Register</button>
          </div>
          <div className="form-group">
            <button onClick={handleLogin}>Log In</button>
          </div>
        </div>
        <br />
        <div className="form-row">
          <div className="form-group">
            <button onClick={handleGoHome}>Go Home</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProtectedRoute;
