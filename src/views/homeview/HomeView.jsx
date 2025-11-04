
import profilePic from "/assets/profile_photo.png"
import styles from "./Homeview.module.css";
const HomeView = () => {
  return (
    <div className='container'>
      <div className={styles.profileCard}>
        <img src={profilePic} alt="profile_photo" className={styles.profileImage} />
        <h1>Hello, I'm Ramesh Pokharel.</h1>
        <p>
          I'm a passionate full-stack developer with a strong commitment to continuous learning
          and staying current with emerging technologies.
          My current tech stack includes Java, Spring Boot, PostgreSQL, React, and other modern tools.
        </p>
      </div>
    </div>
  )
}

export default HomeView