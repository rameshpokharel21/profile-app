import { NavLink } from "react-router-dom"
import styles from "./Header.module.css";

const Header = () => {
  return (
   <header className={styles.navbar}>
    <nav className={styles.navContainer}>
        <NavLink to="/" className={styles.navLink}>Home</NavLink>
        <NavLink to="/projects" className={styles.navLink}>Projects</NavLink>
        <NavLink to="/resume" className={styles.navLink}>Resume</NavLink>
    </nav>
   </header>
  )
}

export default Header
