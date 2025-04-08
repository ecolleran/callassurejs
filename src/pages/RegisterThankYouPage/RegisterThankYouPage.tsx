import LoginSigninHeader from "../../components/LoginRegisterHeader/LoginSigninHeader";
import RegisterThankYou from "../../components/RegisterThankYou/RegisterThankYou";
import LoginRegisterFooter from "../../components/LoginRegisterFooter/LoginRegisterFooter";
import styles from './RegisterThankYouPage.module.css';
import { Helmet } from "react-helmet";

function SetCheckInPage() {
  return (
    <div className={styles.registerPage}>
      <Helmet>
        <title>Registration Successful! | CallAssure</title>
      </Helmet>
      <div>
        <LoginSigninHeader />
        <RegisterThankYou />
        <LoginRegisterFooter />
      </div>
    </div>
  );
}

export default SetCheckInPage;