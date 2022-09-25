import classNames from "classnames";
import Feedback, { Props as FeedbackViewType } from "../Feedback";
import styles from "./FeedbackSection.module.scss";

interface Props {
  feedback?: FeedbackViewType;
  children?: React.ReactNode;
  showDefaultMessage: boolean;
}

const FeedbackSection = ({ feedback, children, showDefaultMessage }: Props) => {
  return (
    <>
      {feedback ? (
        <>
          <div className={styles.divider} />
          <div className={styles.container}>
            <Feedback {...feedback} />
          </div>
        </>
      ) : (
        <>
          {showDefaultMessage && (
            <>
              <div className={styles.divider} />
              <div className={classNames([styles.container, styles.center])}>
                아직 피드백이 도착하지 않았어요. 😢
              </div>
            </>
          )}
        </>
      )}
      {children}
    </>
  );
};

export default FeedbackSection;
