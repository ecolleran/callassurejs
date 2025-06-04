import LoginSigninHeader from "../../components/Headers/LoginRegisterHeader/LoginSigninHeader";
import Login from "../../components/Login/Login";
import LoginRegisterFooter from "../../components/Footers/LoginRegisterFooter/LoginRegisterFooter";
import styles from './LoginPage.module.css';
import { Helmet } from "react-helmet";

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <Helmet>
        <title>Sign In to your Account | CallAssure</title>
      </Helmet>
      <LoginSigninHeader />
      <Login />
      <LoginRegisterFooter />
    </div>
  );
}

export default LoginPage;