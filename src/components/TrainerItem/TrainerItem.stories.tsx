import { Meta, Story } from "@storybook/react";
import TrainerItem, { Props } from "./TrainerItem";

export default {
  title: "components/training/TrainerItem",
  component: TrainerItem,
  args: {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5f19/6166/3a1db2872671853e954b7ba5f084b209?Expires=1662336000&Signature=bxd9vusvobS6LTQDX7H2PFpZmz2ntX-Q-XdaEpvJl-qINAPNqR2XH5JlwT4-n0pQJAscEuG8tf3BUEVCOyYj-wndNStwf0qz12RPSa9pUTvY--qQSl8rVPE9dwf-BaSuUdMzOlR0DykUlswOKiMK2fstjT8cfuQIT28cXwjvw9PC2MNvT8ug8z6rzowSvi~ekqPu0cgR6hl8aCd7yAeWiaALbgq7bQpcoa5gDphPhU8C9n7hABDp06hgmqlXD03bYrxYyzUBHwUFWSSRNfoimvifsgB0lxNII8WhA~77qAtU8ts6m3RPdIrfIr2m~mRoc7BIiPb2QKSyQIiIfn4B1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    nickname: "Leannon",
    categoryName: "발라드",
    introduce: "버클리 음대 출신의 전문 트레이너",
    likeCount: 7082,
    commentCount: 2329,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <TrainerItem {...args} />;

export const 작은 = Template.bind({});
작은.args = {
  onClick: () => alert("아이템 선택"),
};

export const 큰 = Template.bind({});
큰.args = {
  size: "LARGE",
};

export const 작은_좋아요 = Template.bind({});
작은_좋아요.args = {
  onClick: () => alert("아이템 선택"),
  liked: true
};

