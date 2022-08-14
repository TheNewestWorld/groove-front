import { Meta } from "@storybook/react";
import TopDownFilter, { Props } from "./TopDownFilter";

export default {
  title: "components/TopDownFilter",
  component: TopDownFilter,
  args: {
    activeFilter: "최신순",
    filterList: ["최신순", "인기순", "댓글순"],
    onClickFilter: (filter: string) => alert(`${filter} 클릭!`),
  },
} as Meta;

const Template = (args: Props) => <TopDownFilter {...args} />;

export const 기본 = Template.bind({});
