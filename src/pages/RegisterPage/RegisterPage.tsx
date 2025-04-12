import LoginSigninHeader from "../../components/Headers/LoginRegisterHeader/LoginSigninHeader";
import Register from "../../components/Register/Register"
import LoginRegisterFooter from "../../components/LoginRegisterFooter/LoginRegisterFooter";
import styles from './RegisterPage.module.css';
import { Helmet } from "react-helmet";

function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <Helmet>
        <title>Register and create your CallAssure Account | CallAssure</title>
      </Helmet>
      <div>
        <LoginSigninHeader />
        <Register />
        <LoginRegisterFooter />
      </div>
    </div>
  );
}

export default RegisterPage;