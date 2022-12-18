import classnames from "classnames";
import { ArrowIcon } from "../../assets/icon";
import styles from "./SettingList.module.scss";

export interface Props {
  list: {
    title: string;
    content?: string;
    description?: string;
    badge?: React.ReactNode;
    onClick: () => void;
  }[];
  emptyMessage?: string;
  classNames?: string;
}

const SettingList = ({ list, classNames, emptyMessage }: Props) => {
  return (
    <>
      {list.length !== 0 ? (
        <div className={classnames([styles.container, classNames])}>
          {list.map(({ title, content, description, badge, onClick }) => (
            <section key={title} onClick={onClick} className={styles.item}>
              <div>
                <div className={styles.titleSection}>
                  <span className={styles.title}>{title}</span>
                  {badge}
                </div>
                {content && <div className={styles.content}>{content}</div>}
              </div>
              {description ? (
                <div className={styles.description}>{description}</div>
              ) : (
                <ArrowIcon className={styles.arrow} />
              )}
            </section>
          ))}
        </div>
      ) : (
        <div className={styles.emptyMessage}>{emptyMessage}</div>
      )}
    </>
  );
};

export default SettingList;
