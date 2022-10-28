import { Meta, Story } from "@storybook/react";
import ImageDetail, { Props } from "./ImageDetail.view";

export default {
  title: "Pages/ImageDetail",
  component: ImageDetail,
  args: {
    imageList: [
      ...[...Array(10)].map((_, index) => {
        return {
          src:
            "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1666569600&Signature=g9DLrRClT~CiR6rBvlycjnAgt2RHyJ2qxulrwmQLy-Py-fupLn600vR4BIToPkFwiHClQxvuOkVjxWRnCCaVimfvmL6rVOn3ApGfzmrbC46a8mUei5HNiwV5Nxnxpxdlg4vjBX8mSBfk69YxxMEn8ANSrKb3CVq-BSt9Nr68ZYVlp1QVLlQlFGDPwY~D247UeVrJB0qR~GhUJEeSO4aIIZeOBpcPtmmm9v9PeutwEbK-cBpNRcgPPZAr0kWDY5O9MfiUmNNf-xsHUqDYTjK5O9x~hRKc7pMRWP6sNABfgdneN~fxzVWuUqZvpwyLIajONLSRgIZmfQOeeTOJk1Hqaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: index,
        };
      }),
    ],
    src: "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1666569600&Signature=g9DLrRClT~CiR6rBvlycjnAgt2RHyJ2qxulrwmQLy-Py-fupLn600vR4BIToPkFwiHClQxvuOkVjxWRnCCaVimfvmL6rVOn3ApGfzmrbC46a8mUei5HNiwV5Nxnxpxdlg4vjBX8mSBfk69YxxMEn8ANSrKb3CVq-BSt9Nr68ZYVlp1QVLlQlFGDPwY~D247UeVrJB0qR~GhUJEeSO4aIIZeOBpcPtmmm9v9PeutwEbK-cBpNRcgPPZAr0kWDY5O9MfiUmNNf-xsHUqDYTjK5O9x~hRKc7pMRWP6sNABfgdneN~fxzVWuUqZvpwyLIajONLSRgIZmfQOeeTOJk1Hqaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    onClickImage: (id: number) => alert(id + "클릭"),
    onClickClose: () => alert("닫기 클릭"),
    leftArrowClick: () => alert("이전 클릭"),
    rightArrowClick: () => alert("다음 클릭"),
    imageIndex: 1,
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <ImageDetail {...args} />;

export const 기본 = Template.bind({});
