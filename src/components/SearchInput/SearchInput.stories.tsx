import { Meta } from "@storybook/react";
import SearchInput, { Props } from "./SearchInput";

export default {
  title: "components/page/SearchInput",
  component: SearchInput,
  args: {
    list: [
      {
        title: "추천태그",
        type: "tag",
        itemList: [
          "허인 트레이너",
          "정인균 트레이너",
          "123456790",
          "1234567890",
          "1234567890",
        ],
      },
      { title: "최근 검색 기록", type: "line", itemList: ["유재석", "강호동"] },
    ],
    onClickCancle: () => alert("취소 클릭"),
    onSubmitSearch: (value: string) => alert(value),
    deleteItem: (value: string) => alert(value),
  },
} as Meta;

const Template = (args: Props) => <SearchInput {...args} />;

export const 기본 = Template.bind({});
