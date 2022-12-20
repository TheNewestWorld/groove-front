import styles from "./Loading.module.scss";
import gif from "../../assets/image/loading.gif";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.gif} alt="gif" src={gif} />
        <p>잠시만 기다려주세요.</p>
      </div>
    </div>
  );
};

export default Loading;
