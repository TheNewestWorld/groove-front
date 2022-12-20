import { LoadingImage } from "./images";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={LoadingImage}
        alt="해당 데이터를 불러오고 있어요..."
      />
    </div>
  );
};

export default Loading;
