import { useNavigate, useParams } from "react-router-dom";
import useNoticeDetail from "./hooks/useNoticeDetail";
import NoticeDetailView from "./NoticeDetail.view";
import Header from "../../../components/Header";
import { ArrowIcon } from "../../../assets/icon";
import Loading from "../../../components/Loading";
import Error from "../../../components/Error";

const NoticeDetail = () => {
  const { noticeId } = useParams<{ noticeId: string }>();

  const navigator = useNavigate();
  const { isLoading, isError, notice } = useNoticeDetail({
    noticeId: Number(noticeId),
  });

  if (isLoading || !notice) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
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
