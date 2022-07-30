import { Meta } from "@storybook/react";
import CategoryLayout, { Props } from "./CategoryLayout";

export default {
  title: "layouts/CategoryLayout",
  component: CategoryLayout,
  args: {
    title: "상담내역",
    listLength: 10,
    activeFilter: "전체",
    filterList: ["전체", "필터1", "필터2", "필터3"],
    onClickFilter: (filter: string) => alert(`${filter} 클릭!`),
    children: <>여기 리스트가 올 겁니다.</>,
  },
} as Meta;

const Template = (args: Props) => <CategoryLayout {...args} />;

export const 기본 = Template.bind({});
