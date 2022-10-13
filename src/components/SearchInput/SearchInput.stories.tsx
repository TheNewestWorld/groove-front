import { Meta } from "@storybook/react";
import SearchInput, { Props } from "./SearchInput";

export default {
  title: "components/page/SearchInput",
  component: SearchInput,
  args: {
    onClickCancle: () => alert("취소 클릭"),
    onSubmitSearch: (value: string) => alert(value),
    children: <>하단 내용은 여기에</>,
  },
} as Meta;

const Template = (args: Props) => <SearchInput {...args} />;

export const 기본 = Template.bind({});
