
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading...</p>
    </div>
  )
}

export default Spinner