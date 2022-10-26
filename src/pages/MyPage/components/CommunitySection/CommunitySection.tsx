import CommunityItem from "../../../../components/CommunityItem";
import styles from "./CommunitySection.module.scss";

interface Props {
  communityList: {
    id: number;
    user: string;
    userImageSrc: string;
    title: string;
    description: string;
    likeCount: number;
    commentCount: number;
    liked: boolean;
  }[];
  onClick: (id: number) => void;
  className?: string;
}

const CommunitySection = ({ communityList, onClick, className }: Props) => {
  return (
    <div className={className}>
      {communityList.map((item) => {
        return (
          <CommunityItem
            key={item.id}
            className={styles.item}
            {...item}
            onClick={() => onClick(item.id)}
          />
        );
      })}
    </div>
  );
};

export default CommunitySection;
