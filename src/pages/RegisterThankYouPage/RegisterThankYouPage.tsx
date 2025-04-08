import LoginSigninHeader from "../../components/LoginRegisterHeader/LoginSigninHeader";
import RegisterThankYou from "../../components/RegisterThankYou/RegisterThankYou";
import LoginRegisterFooter from "../../components/LoginRegisterFooter/LoginRegisterFooter";
import styles from './RegisterThankYouPage.module.css';

function SetCheckInPage() {
  return (
    <div className={styles.registerPage}>
      <div>
        <LoginSigninHeader />
        <RegisterThankYou />
        <LoginRegisterFooter />
      </div>
    </div>
  );
}

export default SetCheckInPage;