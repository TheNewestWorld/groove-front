import { Meta } from "@storybook/react";
import CommunityListView, { Props } from "./CommunityList.view";

export default {
  title: "Pages/community/CommunityList/views",
  component: CommunityListView,
  args: {
    isLoading: false,
    activeSort: "최신순",
    sortList: ["최신순", "인기순", "댓글순"],
    activeCategory: "전체 게시물",
    categoryList: ["전체 게시물", "보컬 이야기", "일상 이야기", "기타"],
    onChangeSortType: (filter: string) => alert(filter),
    onChangeCategory: (tab: string) => alert(tab),
    communityList: [
      {
        user: "권진아",
        userImageSrc:
          "https://static.remove.bg/remove-bg-web/bf2ec228bc55da2aaa8a6978c6fe13e205c3849c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
        title: "정승환처럼 노래부르려면 도대체 어떻게 해?",
        description:
          "기업은 기본적으로 영리(재산상의 이익)를 엊기 위하여 재화나 용역을 생산하고 판매하는 조직체이다",
        likeCount: 1245,
        commentCount: 235,
        liked: true,
      },
      {
        user: "Greenholt",
        userImageSrc:
          "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
        title: "보컬코칭 받아보신분 계신가요? 어땠는지",
        description:
          "보컬코칭 받아보신분 계신가요? 어땠는지좀 알려주세요 제발요ㅠ궁금해서 미쳐버릴거 같으니까요",
        likeCount: 1162,
        commentCount: 335,
        liked: false,
      },
      {
        user: "정승환",
        userImageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU",
        title: "권진아처럼 노래부르려면 도대체 어떻게 해???",
        description:
          "권진아처럼 노래부르려면 도대체 어떻게 해야하는 것인가요?? 너무 부러워요",
        likeCount: 879,
        commentCount: 135,
        liked: true,
      },
      {
        user: "박진영",
        userImageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRzSGyoPFkAK611PRdY8mApcrkJOHxX_rXw&usqp=CAU",
        title: "보컬코칭 받아보신분 계신가요? 어땠는지요",
        description: "보컬코칭 받고 싶어요 방법을 알려주세요~~ 제발요",
        likeCount: 279,
        commentCount: 35,
        liked: false,
      },
    ],
  },
} as Meta;

const Template = (args: Props) => <CommunityListView {...args} />;

export const 기본 = Template.bind({});
