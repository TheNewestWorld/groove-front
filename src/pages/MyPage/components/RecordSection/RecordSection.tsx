import SlideItem from "../../../../components/SlideItem";
import RecordItem from "../RecordItem";

interface Props {
  className?: string;
  recordList: {
    id: number;
    title: string;
    date: Date;
    length: string;
    url: string;
  }[];
  onDelete: (id: number) => void;
}

const RecordSection = ({ className, recordList, onDelete }: Props) => {
  return (
    <div className={className}>
      {recordList.map((item) => (
        <SlideItem
          hasDelete
          onClickDelete={() => onDelete(item.id)}
        >
          <RecordItem key={item.id} {...item} onDelete={onDelete} />
        </SlideItem>
      ))}
    </div>
  );
};

export default RecordSection;
