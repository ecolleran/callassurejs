import DashboardHeader from '../../components/Headers/DashboardHeader/DashboardHeader';
import styles from './DashboardMainPage.module.css';
import { Helmet } from "react-helmet";

function DashboardMainPage() {
  return (
    <div className={styles.loginPage}>
      <Helmet>
        <title>Dashboard | CallAssure</title>
      </Helmet>
      <DashboardHeader />
    </div>
  );
}

export default DashboardMainPage;