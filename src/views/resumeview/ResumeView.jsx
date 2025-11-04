import resumePdf from "../../../assets/resume.pdf"
import styles from "./ResumeView.module.css";
const ResumeView = () => {
  return (
    <div className={styles.container}>
       <iframe src={resumePdf} className={styles.iFrame} title="Resume PDF"/>
    </div>
  )
}

export default ResumeView;