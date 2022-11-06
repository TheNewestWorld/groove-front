import { BadgeText } from "../../constants";
import styles from "./Badge.module.scss";

export interface Props {
  type: "COMPLETE";
}

const Badge = ({ type }: Props) => {
  return <span className={styles.container}>{BadgeText[type]}</span>;
};

export default Badge;
