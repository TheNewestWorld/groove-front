import classNames from "classnames";

import styles from "./EmptyPage.module.scss";

export interface Props {
  title?: string;
  description?: string;
  type?: "full" | "auto";
  className?: string;
  children?: React.ReactNode;
}

const EmptyPage = ({
  title,
  description,
  type = "auto",
  className,
  children,
}: Props) => {
  return (
    <div className={classNames([className, styles.container])}>
      <div className={classNames([styles.message, styles[type]])}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default EmptyPage;
