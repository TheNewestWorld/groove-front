import { useNavigate } from "react-router-dom";
import BuildPaths from "../../../common/paths";
import CircleButton from "../../../components/CircleButton";
import SettingListForm from "../../../components/SettingListForm";
import FloatingLayout from "../../../layout/FloatingLayout";
import Badge from "./components/Badge";
import useQnA from "./hooks/useQnA";
import styles from "./QnA.module.scss";
import { PencilIcon } from "../../../assets/icon";

const QnA = () => {
  const navigation = useNavigate();

  const { isLoading, isError, settingList } = useQnA();

  if (isLoading) {
    // TODO: 스켈레톤 적용
    return <>Loading...</>;
  }

  if (isError) {
    // TODO: 에러 발생 처리
    return <>에러가 발생했습니다.</>;
  }

  return (
    <>
      {/* // TODO: SettingList에 SlideItem 컴포넌트 Wrapping 필요 */}
      <SettingListForm
        headerTitle="문의하기"
        settingList={settingList.map(({ id, hasAnswer, ...item }) => {
          return {
            ...item,
            onClick: () => navigation(BuildPaths.qnaDetail(String(id))),
            badge: hasAnswer ? <Badge type="COMPLETE" /> : undefined,
          };
        })}
        emptyMessage="등록된 문의내역이 없어요."
        onClickBack={() => navigation(-1)}
      />
      <FloatingLayout>
        <CircleButton
          className={styles.floatingPencil}
          icon={
            <PencilIcon
              onClick={() => {
                navigation(BuildPaths.qnaNew());
              }}
            />
          }
        />
      </FloatingLayout>
    </>
  );
};

export default QnA;
