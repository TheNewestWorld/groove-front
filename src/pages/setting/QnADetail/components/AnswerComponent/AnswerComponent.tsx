import classNames from "classnames";
import styles from "./AnswerComponent.module.scss";

export interface Props {
  title: string;
  content: string;
  className?: string;
}

const AnswerComponent = ({ title, content, className }: Props) => {
  return (
    <div className={classNames([styles.container, className])}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default AnswerComponent;
