import { Meta, Story } from "@storybook/react";
import SelectCategory, { Props } from "./SelectCategory";


export default {
  title: 'components/SelectCategory',
  component: SelectCategory,
  args: {
    hasCloseButton: false,
    title: "카테고리를 선택해주세요.",
    activeCategory: "",
    placeholder: "카테고리를 선택해주세요.",
    categoryList: ["보컬 이야기", "일상 이야기", "기타"],
    onClickCategory: (category: string) => alert(`${category}`),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <SelectCategory {...args} />;

export const 닫기_있음 = Template.bind({});
닫기_있음.args = {
  hasCloseButton: true,
};

export const 닫기_없음 = Template.bind({});

export const 헤더_없음 = Template.bind({});
헤더_없음.args = {
  title: undefined,
};
