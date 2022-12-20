import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.scss";

const Error = () => {
  const navigation = useNavigate();

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation(-1);
    }, 5000);
  });
  return <div className={styles.container}>에러가 발생했습니다...</div>;
};

export default Error;
