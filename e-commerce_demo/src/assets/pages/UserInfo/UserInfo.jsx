import styles from "./UserInfo.module.css";
import { context } from "../../../App";
import { useContext } from "react";

const UserInfo = () => {
  const { user, setUser } = useContext(context);
  const handlerLogout = () => {
    setUser((prevState) => ({
      ...prevState,
      logged: false,
    }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.settings}>
        <div className={styles.settingsTitle}>
          <span className={styles.settingsTitleUpdate}>Information</span>
        </div>
        <form className={styles.settingsForm}>
          <div className={styles.settingsPP}>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className={styles.settingsPPInput}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="name" />
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email" />
          <label>Password</label>
          <input type="text" placeholder={user.password} name="password" />
          <button className={styles.btn} onClick={handlerLogout}>
            <span>Log out</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfo;
