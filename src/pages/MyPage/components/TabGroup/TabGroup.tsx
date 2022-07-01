interface Props {
  onClickTab: (tab: "recording" | "bookmark" | "training") => void;
}

const TabGroup = ({ onClickTab }: Props) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            onClickTab("recording");
          }}
        >
          녹음내역
        </button>
        <button
          onClick={() => {
            onClickTab("bookmark");
          }}
        >
          스크랩
        </button>
        <button
          onClick={() => {
            onClickTab("training");
          }}
        >
          트레이닝
        </button>
      </div>
    </>
  );
};

export default TabGroup;
