// import { Link } from 'react-router-dom';
// import styles from './HeaderContent2.module.css';

// function HeaderContentMinimized() {
//   return (
//     <div className={styles.minimized}>
//       <Link to="/MenuPage" className={styles.hamburgerLink}>
//         <img src="/white-hamburger.png" alt="white hamburger menu icon" className={styles.hamburger} />
//       </Link>
//     </div>
//   );
// }

// export default HeaderContentMinimized

import styles from './HeaderContent2.module.css';

interface HeaderContentMinimizedProps {
  onOpenMenu: () => void;
}

function HeaderContentMinimized({ onOpenMenu }: HeaderContentMinimizedProps) {
  return (
    <div className={styles.minimized}>
      <img src="/white-hamburger.png" alt="hamburger menu icon" className={styles.hamburger} onClick={onOpenMenu}/>
    </div>
  );
}

export default HeaderContentMinimized;