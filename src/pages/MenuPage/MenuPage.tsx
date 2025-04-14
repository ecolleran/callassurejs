import MenuHeader from '../../components/Headers/MenuHeader/MenuHeader';
import MenuContent from '../../components/MenuContent/MenuContent';
import styles from './MenuPage.module.css';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion'; // Import Framer Motion

interface MenuPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  open: { x: 0 },
  closed: { x: "100%" }, // Slides out to the left
};

function MenuPage({ isOpen, onClose }: MenuPageProps) {
  console.log("isOpen in MenuPage:", isOpen); // Add this for debugging


  return (
    <motion.div
      className={styles.menuPage}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
    >
      <Helmet>
         <title>CallAssure | Assuring Peace of Mind and Independence</title>
       </Helmet>
       <MenuHeader onCloseMenu={onClose} /> {/* Only pass onClose as onCloseMenu */}
       <MenuContent />
    </motion.div>
  );
}

export default MenuPage;