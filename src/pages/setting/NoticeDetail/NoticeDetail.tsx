import { useNavigate } from "react-router-dom";
import useNoticeDetail from "./hooks/useNoticeDetail";
import NoticeDetailView from "./NoticeDetail.view";

const NoticeDetail = () => {
  const navigator = useNavigate();
  const noticeId = "";
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

  return <NoticeDetailView onClose={() => navigator(-1)} {...notice} />;
};

export default NoticeDetail;
