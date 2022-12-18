import { useNavigate, useParams } from "react-router-dom";
import useNoticeDetail from "./hooks/useNoticeDetail";
import NoticeDetailView from "./NoticeDetail.view";
import Header from "../../../components/Header";
import { ArrowIcon } from "../../../assets/icon";

const NoticeDetail = () => {
  const { noticeId } = useParams<{ noticeId: string }>();

  const navigator = useNavigate();
  const { isLoading, isError, notice } = useNoticeDetail({
    noticeId: Number(noticeId),
  });

  if (isLoading || !notice) {
    // TODO: 스켈레톤
    return <>LOADING...</>;
  }

  if (isError) {
    // TODO: 에러 처리
    return <>에러 발생</>;
  }

  return (
    <>
      <Header
        title="공지사항"
        left={<ArrowIcon />}
        onClickLeft={() => navigator(-1)}
      />
      <NoticeDetailView {...notice} />
    </>
  );
};

export default NoticeDetail;
