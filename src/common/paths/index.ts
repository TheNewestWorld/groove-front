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
  communityNew: () => `${RoutePath.communityNew}`,
  communityEdit: (communityId: string) =>
    `${RoutePath.communityEdit.replace(":communityId", communityId)}`,
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
  notification: () => `${RoutePath.notification}`,
  qnaList: () => `${RoutePath.qnaList}`,
  qnaDetail: (qnaId: string) =>
    `${RoutePath.qnaDetail.replace(":qnaId", qnaId)}`,
  qnaNew: () => `${RoutePath.qnaNew}`,
  qnaEdit: (qnaId: string) => `${RoutePath.qnaEdit.replace(":qnaId", qnaId)}`,
  vocForm: () => `${RoutePath.vocForm}`,
};

export default BuildPaths;
