// import MenuHeader from '../../components/Headers/MenuHeader/MenuHeader';
// import MenuContent from '../../components/MenuContent/MenuContent';
// import styles from './MenuPage.module.css';
// import { Helmet } from "react-helmet";

// function MenuPage() {
//   return (
//     <div className={styles.menuPage}>
//       <Helmet>
//         <title>CallAssure | Assuring Peace of Mind and Independence</title>
//       </Helmet>
//       <MenuHeader />
//       <MenuContent />
//     </div>
//   );
// }

import MenuHeader from '../../components/Headers/MenuHeader/MenuHeader';
import MenuContent from '../../components/MenuContent/MenuContent';
import styles from './MenuPage.module.css';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

interface MenuPageProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuPage({ isOpen, onClose }: MenuPageProps) {
  // const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <div className={`${styles.menuPage} ${isOpen ? styles.open : ''}`}>
      <Helmet>
        <title>CallAssure | Assuring Peace of Mind and Independence</title>
      </Helmet>
      <MenuHeader onCloseMenu={onClose} /> {/* Only pass onClose as onCloseMenu */}
      <MenuContent />
    </div>
  );
}

export default MenuPage;