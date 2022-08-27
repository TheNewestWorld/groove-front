import classNames from "classnames";

import styles from "./EmptyPage.module.scss";

export interface Props {
  title?: string;
  description?:string;
  className?:string
}

const EmptyPage = ({
  title,
  description,
  className,
}: Props) => {
  return (
    <div className={classNames([className, styles.container])}>
      <div className={styles.message}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default EmptyPage;
