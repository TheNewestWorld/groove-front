import CircleImage from "../../../../components/CircleImage";
import styles from "./ListSection.module.scss";

interface Props {
  sectionTitle: string;
  list: { id: number; src: string; content: string; ago: string }[];
  onClickItem: (id: number) => void;
}

const ListSection = ({ sectionTitle, list, onClickItem }: Props) => {
  return (
    <>
      <div className={styles.title}>{sectionTitle}</div>
      {list.map((item, index) => (
        <div
          className={styles.items}
          key={index}
          onClick={() => {
            onClickItem(item.id);
          }}>
          <CircleImage className={styles.image} src={item.src} />
          <div>
            <div className={styles.content}>{item.content}</div>
            <div className={styles.ago}>{item.ago}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListSection;
