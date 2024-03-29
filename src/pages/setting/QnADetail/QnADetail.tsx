import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowIcon, DotsHorizonIcon } from "../../../assets/icon";
import { deleteQnA } from "../../../common/apis/qna/deleteQnA";
import BuildPaths from "../../../common/paths";
import Header from "../../../components/Header";
import useQnADetail from "./hooks/useQnADetail";
import QnADetailView from "./QnADetail.view";

const QnADetail = () => {
  const { qnaId } = useParams<{ qnaId: string }>();

  const [isOpenOption, setOpenOption] = useState<boolean>(false);

  const { isLoading, isError, qna } = useQnADetail({
    qnaId: Number(qnaId),
  });

  const navigation = useNavigate();

  if (isLoading || !qna) {
    // TODO: 스켈레톤
    return <>LOADING...</>;
  }

  if (isError || !qnaId) {
    // TODO: 에러 처리
    return <>에러 발생</>;
  }

  return (
    <>
      <Header
        left={<ArrowIcon />}
        right={<DotsHorizonIcon />}
        onClickLeft={() => navigation(-1)}
        onClickRight={() => setOpenOption(true)}
      />
      <QnADetailView
        {...qna}
        isOpenOption={isOpenOption}
        onCloseOption={() => setOpenOption(false)}
        onDelete={() => {
          deleteQnA({ qnaId: Number(qnaId) });
          navigation(-1);
        }}
        onModify={() => {
          navigation(BuildPaths.qnaEdit(qnaId));
        }}
        onClickReQnA={() => {
          navigation(BuildPaths.qnaNew(), { replace: true });
        }}
      />
    </>
  );
};

export default QnADetail;
