import { Meta, Story } from "@storybook/react";
import BottomSheetList, { Props } from "./BottomSheetList";

export default {
  title: "components/BottomSheetList",
  component: BottomSheetList,
  args: {
    header: "정렬 순서를 선택해주세요.",
    activeItem: "최신순",
    list: ["최신순", "인기순", "댓글순"],
    onClick: (filter: string) => alert(`${filter} 클릭!`),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <BottomSheetList {...args} />;

export const 기본 = Template.bind({});

export const 닫기_없음 = Template.bind({});
닫기_없음.args = {
  hasCloseButton: false,
};

export const 헤더_없음 = Template.bind({});
헤더_없음.args = {
  header: undefined,
};
