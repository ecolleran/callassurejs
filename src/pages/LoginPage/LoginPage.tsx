import LoginSigninHeader from "../../components/LoginRegisterHeader/LoginSigninHeader";
import Login from "../../components/Login/Login";
import LoginRegisterFooter from "../../components/LoginRegisterFooter/LoginRegisterFooter";
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <LoginSigninHeader />
      <Login />
      <LoginRegisterFooter />
    </div>
  );
}

export default LoginPage;