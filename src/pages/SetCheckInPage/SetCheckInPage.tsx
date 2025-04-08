import LoginSigninHeader from "../../components/LoginRegisterHeader/LoginSigninHeader";
import SetCheckIn from "../../components/SetCheckIn/SetCheckIn";
import LoginRegisterFooter from "../../components/LoginRegisterFooter/LoginRegisterFooter";
import styles from './SetCheckInPage.module.css';

function SetCheckInPage() {
  return (
    <div className={styles.registerPage}>
      <div>
        <LoginSigninHeader />
        <SetCheckIn />
        <LoginRegisterFooter />
      </div>
    </div>
  );
}

export default SetCheckInPage;