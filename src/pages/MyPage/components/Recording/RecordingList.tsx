interface ItemProps {
  title: string;
  length: string;
}

const RecordingItem = ({ title, length }: ItemProps) => {
  return (
    <div>
      {title} / {length}
    </div>
  );
};

interface Props {
  recordingList: { id: string; title: string; length: string }[];
}

const RecordingList = ({ recordingList }: Props) => {
  return (
    <div>
      녹음 내역
      {recordingList.map((item) => (
        <RecordingItem {...item} />
      ))}
    </div>
  );
};

export default RecordingList;
