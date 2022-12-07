import RoutePath from "../../constants/routePath";

const BuildPaths = {
  home: () => `${RoutePath.home}`,
  entry: () => `${RoutePath.entry}`,
  signIn: () => `${RoutePath.signIn}`,
  signUp: () => `${RoutePath.signUp}`,
  findPassword: () => `${RoutePath.findPassword}`,
  resetPassword: () => `${RoutePath.resetPassword}`,
  communityHome: (category: string) =>
    `${RoutePath.communityHome.replace(":category", category)}`,
  communityForm: () => `${RoutePath.communityForm}`,
  communityComment: (communityId: string) =>
    `${RoutePath.communityComment.replace(":communityId", communityId)}`,
  communityDetail: (communityId: string) =>
    `${RoutePath.communityDetail.replace(":communityId", communityId)}`,
  mypage: (tab: string) => `${RoutePath.mypage.replace(":tab", tab)}`,
  myProfile: () => `${RoutePath.myProfile}`,
  search: () => `${RoutePath.search}`,
  setting: () => `${RoutePath.setting}`,
  noticeList: () => `${RoutePath.noticeList}`,
  noticeDetail: (noticeId: string) =>
    `${RoutePath.noticeDetail.replace(":noticeId", noticeId)}`,
  qnaList: () => `${RoutePath.qnaList}`,
  qnaDetail: (qnaId: string) =>
    `${RoutePath.qnaDetail.replace(":qnaId", qnaId)}`,
  vocForm: () => `${RoutePath.vocForm}`,
};

export default BuildPaths;