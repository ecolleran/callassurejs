import LoginSigninHeader from "../../components/LoginRegisterHeader/LoginSigninHeader";
import SetCheckIn from "../../components/SetCheckIn/SetCheckIn";
import LoginRegisterFooter from "../../components/LoginRegisterFooter/LoginRegisterFooter";
import styles from './SetCheckInPage.module.css';
import { Helmet } from "react-helmet";

function SetCheckInPage() {
  return (
    <div className={styles.registerPage}>
      <Helmet>
        <title>Set Up your Check-In Time | CallAssure</title>
      </Helmet>
      <div>
        <LoginSigninHeader />
        <SetCheckIn />
        <LoginRegisterFooter />
      </div>
    </div>
  );
}

export default SetCheckInPage;