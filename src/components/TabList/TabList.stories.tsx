import { Meta, Story } from "@storybook/react";
import TabList, { Props } from "./TabList";

export default {
  title: "components/TabList",
  component: TabList,
  args: {
    type: "underline",
    activeTab: "전체 게시물",
    tabList: ["전체 게시물", "탭1", "탭2", "탭3"],
    onClickTab: (tab: string) => alert(`${tab} 클릭`),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <TabList {...args} />;

export const 언더라인 = Template.bind({});

export const 라운드 = Template.bind({});
라운드.args = {
  type: "round",
};
