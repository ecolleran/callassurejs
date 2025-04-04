import LoginSigninHeader from "../../components/LoginRegisterHeader/LoginSigninHeader";
import Register from "../../components/Register/Register"
import LoginRegisterFooter from "../../components/LoginRegisterFooter/LoginRegisterFooter";
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <div>
        <LoginSigninHeader />
        <Register />
        <LoginRegisterFooter />
      </div>
    </div>
  );
}

export default RegisterPage;