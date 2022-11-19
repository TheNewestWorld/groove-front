import Recorder from "./components/Recorder";
import MyPageView, { Props } from "./MyPage.view";

const args: Props = {
  profileImage:
  "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202209/03/769ed8ec-20d2-45c9-a95f-b5672a0753c3.jpg",
  nickname: "닉네임",
  tab: "RECORD",
  recordList: [...Array(5)].map((_, index) => {
    return {
      id: index,
      title: "파일 제목",
      date: new Date(),
      length: "3:40",
      url: "",
    };
  }),
  likedList: [...Array(5)].map((_, index) => {
    return {
      id: index,
      user: "권진아",
      userImageSrc:
        "https://static.remove.bg/remove-bg-web/bf2ec228bc55da2aaa8a6978c6fe13e205c3849c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
      title: "정승환처럼 노래부르려면 도대체 어떻게 해?",
      description:
        "기업은 기본적으로 영리(재산상의 이익)를 엊기 위하여 재화나 용역을 생산하고 판매하는 조직체이다",
      likeCount: 1245,
      commentCount: 235,
      liked: true,
    };
  }),
  writtenList: [...Array(5)].map((_, index) => {
    return {
      id: index,
      user: "정승환",
      userImageSrc:
        "https://static.remove.bg/remove-bg-web/bf2ec228bc55da2aaa8a6978c6fe13e205c3849c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
      title: "정승환처럼 노래부르려면 도대체 어떻게 해?",
      description:
        "기업은 기본적으로 영리(재산상의 이익)를 엊기 위하여 재화나 용역을 생산하고 판매하는 조직체이다",
      likeCount: 1245,
      commentCount: 235,
      liked: true,
    };
  }),
  onChangeTab: (tab: string) => {},
  onClickCommunityItem: (id: number) => {},
  onDeleteRecord: (id: number) => {}
};

const MyPage = () => {
  return (
    <div>
      <MyPageView {...args}/>
      <Recorder/>
    </div>
  )
};

export default MyPage;
