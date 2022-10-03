import { Meta, Story } from "@storybook/react";
import MainHeader, { Props } from "./MainHeader";

export default {
  title: "components/common/MainHeader",
  component: MainHeader,
  args: {
    userImageSrc:
      "https://s3-alpha-sig.figma.com/img/4026/9648/1f296c5ef7557a2219acd7a790fd48d3?Expires=1665360000&Signature=HqCFUfuHwTyKe-LGwdVv14dlW4ihv5TkPqr4f8Zi7SgP42RZrt4TDL0DiaHkjkm2Pt0AosyOyNX3jL8wvyNb9M3LHDIaxqwDvV4Qbnta9mB2NxD4DVjHYRCPEFg5Msjlr269usfo-GgWS1MeeRirlVSQRmv~Jr~3I4INSuNXoZHuY-CjQ7ruSNV~CfpnDpPqe4HDZUzhvD-ITV26lF4wEbQlJS1-2BvU59v7GOO4BdPThM16kcp-rzUtT~7TEfQIS2iyDWOwShpetcNIejnyz-qq6bHwtIayixIC6HSWoEQbyKmnNDFQn5~3fOVJCyQs7GaHbEE2FiURAKuYngLcuQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    onTitleClick: () => alert("title 클릭"),
    onSearchClick: () => alert("search 클릭"),
    onAlarmClick: () => alert("alarm 클릭"),
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <MainHeader {...args} />;

export const 커뮤니티 = Template.bind({});

export const 커뮤니티_알림있음 = Template.bind({});
커뮤니티_알림있음.args = {
  hasNotification: true,
};
