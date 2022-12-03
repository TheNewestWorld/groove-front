import useNoticeDetailQuery from "../../../../common/queries/notices/useNoticeDetailQuery";

type Props = {
  noticeId: number;
};

const useNoticeDetail = ({ noticeId }: Props) => {
  const { isLoading, isError, data } = useNoticeDetailQuery({ noticeId });

  return {
    isLoading,
    isError,
    notice: data && {
      title: data.title,
      profileImage: "",
      nickname: "GROOVE",
      date: new Date(data.createdAt),
      content: data.content,
    },
  };
};

export default useNoticeDetail;
