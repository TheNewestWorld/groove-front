import { Meta, Story } from "@storybook/react";
import CommunityDetail, { Props } from "./CommunityDetail.view";

export default {
  title: "Pages/CommunityDetail",
  component: CommunityDetail,
  args: {
    contentHeader: {
      title: "정승환처럼 노래부르려면 도대체 어떻게 해?",
      nickname: "권진아",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/b7aa/0962/1a8f293ebdc9d7319fcf78d5b394601a?Expires=1665964800&Signature=SWbUqN7a90HPTItTWx95Ue0Bq9ig6ZlffTXqLmn9-le6~08OYtyZ9f2zKtjP8K9j2UALBOjXTnkEbsovCAfmddOkoWQ1nU8mZaJpsBc~MVtR0RVIXxBqmCV-0QgjdJfZdaAgYkg7QcyTfe442hCQDpXpbrNTAo-pwYd51044tvTs9bcaIW78T08ZvWS8~7H4rfz0NtIq0s0VDtNc2MvphVw3IHmHAxXthsE5H4RguU030uQP7U8ZG9pf5HkqWUj2wUtCI3RDIHKuy9XanbjRxzffJ7WHGLLzhcfyZRH83MOhcZpewl~FhMd4fhzSv9UUjNFPhTvPKtSN7E1TVSTWOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      date: new Date(),
    },
    contentBody: {
      content:
        "기업은 기본적으로 영리(재산상의 이익)를 얻기 위하여 재화나 용역을 생산하고 판매하는 조직체이다. 이때 기업이 오랜 시간 존속하기 위해서는 유저 유입을 위한 전략을 모색하는 것도 중요하지만, 유입된 인원이 제품/서비스에 매력을 느끼고 지속해서 남아 있도록 하는 것 또한 매우 중요하다\n\n후자가 중요한 이유는 간단하다. 첫 번째는 신규 유저를 확보하는 일은 꽤 큰 비용이 든다. 하버드 비즈니스 리뷰에 따르면, 신규 유저를 확보하는 일은 기존 고객을 유지하는 것보다 적게는 5배, 많게는 ",
      imageList: [
        {
          src: "https://s3-alpha-sig.figma.com/img/0d98/eac2/2cb8f1d0a6711440185938820a08bfec?Expires=1666569600&Signature=g9DLrRClT~CiR6rBvlycjnAgt2RHyJ2qxulrwmQLy-Py-fupLn600vR4BIToPkFwiHClQxvuOkVjxWRnCCaVimfvmL6rVOn3ApGfzmrbC46a8mUei5HNiwV5Nxnxpxdlg4vjBX8mSBfk69YxxMEn8ANSrKb3CVq-BSt9Nr68ZYVlp1QVLlQlFGDPwY~D247UeVrJB0qR~GhUJEeSO4aIIZeOBpcPtmmm9v9PeutwEbK-cBpNRcgPPZAr0kWDY5O9MfiUmNNf-xsHUqDYTjK5O9x~hRKc7pMRWP6sNABfgdneN~fxzVWuUqZvpwyLIajONLSRgIZmfQOeeTOJk1Hqaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/fd6a/f053/5de098e895c6697f0aa8653ddb633936?Expires=1666569600&Signature=OsFL3KSCsVr1uDLojDDM~gl4ZeFoT90eT67CtP~MCgUVGG~6pAWURaL6hmJy0Nn7GJXRXcggFS8-xKkXvKCghaxxVpU-xUWCUebd7asUOrCXdT6dEvoiQ2aXwT7hZ31WTci4egEp6P-N5NBD4lFiPNdN9AnB722NUbPSdTrOB0toUFzDcCTRXl~ZihsB~26SNgamehM5jWdK~7XCGF33jyBJi6MRA4Y~imVnRXGrWO~x91VVb9cgZCXunLAUKp7X~9Yjwza-GE6l8a2mj2Qr24Lv~zpz40h2ctvcEtTgeaw9DEMZNh6MNN7Kt9nzSXvfk7UsAvWVba0eVUCGVuhjqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/7bd2/31ba/9d90b0536c3d4ee25e99fd5eefca4f7f?Expires=1666569600&Signature=F0j9NaSxuL1l2uBAXkgstlxHzsduzsq-ac-SeJS0m0owAe8IDrCr6qg7OHCKAIUezzJIbqICYedpFKn0blJCyoT2yP2mKx6225rXxbfABqCKE7HHb7iig7P-acqHSiolPQdP~cvhGAA1Qf0~ztbv8FQNBPqFHDMgUCecldl8mgrYUE3bmjDaRLrU86pLTAmlgYGgSoWL~QM29Ed5TsMLYapFxRhUGOhpCIRs5~GXi9hGDMIY0FFjv5JJR-7y1lbp0RAaURWRx0rf-qTzFiQdtOIh2zQcckO8LJ3kZ-YhSxShECyGcLHoPLh8bCuFTYb6srj5GOckSHbeQ3XIxwEjDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/a343/cb0b/49071c34639ec69f2575360509d18652?Expires=1666569600&Signature=M-roSuDRmmPh5zf~44TC7fFSCMMA9U9SvCdQRiVXAGKh5NZ8fEhKPS0WSvSEYxhzkKx3XkWN-vZcnMu0M98h-WGOh0gHnx3PNaRtC850EzOP~RXu14jQza~lo2G5Quj-frxlZVj-XlhwCoYiHb8ugGBlOiDaWiVbzhTjhpRkS1xtAyt6KYtRyTPkP3FT9~NZ2m2n7ah5SfjqWrJZTuEyzkFUYBGNFGMIVVOz1KDI1Xl~d7FUcDDPmui58WLO4BGnPdDx7BByRMfzfKu-HPujfUVZyaVyd4Jo0H6OXJjmS1bENLr2fNZ9w6sCjmm7UTB0-fgZxl1MJEHkpeH1~jSuXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/a343/cb0b/49071c34639ec69f2575360509d18652?Expires=1666569600&Signature=M-roSuDRmmPh5zf~44TC7fFSCMMA9U9SvCdQRiVXAGKh5NZ8fEhKPS0WSvSEYxhzkKx3XkWN-vZcnMu0M98h-WGOh0gHnx3PNaRtC850EzOP~RXu14jQza~lo2G5Quj-frxlZVj-XlhwCoYiHb8ugGBlOiDaWiVbzhTjhpRkS1xtAyt6KYtRyTPkP3FT9~NZ2m2n7ah5SfjqWrJZTuEyzkFUYBGNFGMIVVOz1KDI1Xl~d7FUcDDPmui58WLO4BGnPdDx7BByRMfzfKu-HPujfUVZyaVyd4Jo0H6OXJjmS1bENLr2fNZ9w6sCjmm7UTB0-fgZxl1MJEHkpeH1~jSuXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/a343/cb0b/49071c34639ec69f2575360509d18652?Expires=1666569600&Signature=M-roSuDRmmPh5zf~44TC7fFSCMMA9U9SvCdQRiVXAGKh5NZ8fEhKPS0WSvSEYxhzkKx3XkWN-vZcnMu0M98h-WGOh0gHnx3PNaRtC850EzOP~RXu14jQza~lo2G5Quj-frxlZVj-XlhwCoYiHb8ugGBlOiDaWiVbzhTjhpRkS1xtAyt6KYtRyTPkP3FT9~NZ2m2n7ah5SfjqWrJZTuEyzkFUYBGNFGMIVVOz1KDI1Xl~d7FUcDDPmui58WLO4BGnPdDx7BByRMfzfKu-HPujfUVZyaVyd4Jo0H6OXJjmS1bENLr2fNZ9w6sCjmm7UTB0-fgZxl1MJEHkpeH1~jSuXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/a343/cb0b/49071c34639ec69f2575360509d18652?Expires=1666569600&Signature=M-roSuDRmmPh5zf~44TC7fFSCMMA9U9SvCdQRiVXAGKh5NZ8fEhKPS0WSvSEYxhzkKx3XkWN-vZcnMu0M98h-WGOh0gHnx3PNaRtC850EzOP~RXu14jQza~lo2G5Quj-frxlZVj-XlhwCoYiHb8ugGBlOiDaWiVbzhTjhpRkS1xtAyt6KYtRyTPkP3FT9~NZ2m2n7ah5SfjqWrJZTuEyzkFUYBGNFGMIVVOz1KDI1Xl~d7FUcDDPmui58WLO4BGnPdDx7BByRMfzfKu-HPujfUVZyaVyd4Jo0H6OXJjmS1bENLr2fNZ9w6sCjmm7UTB0-fgZxl1MJEHkpeH1~jSuXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/a343/cb0b/49071c34639ec69f2575360509d18652?Expires=1666569600&Signature=M-roSuDRmmPh5zf~44TC7fFSCMMA9U9SvCdQRiVXAGKh5NZ8fEhKPS0WSvSEYxhzkKx3XkWN-vZcnMu0M98h-WGOh0gHnx3PNaRtC850EzOP~RXu14jQza~lo2G5Quj-frxlZVj-XlhwCoYiHb8ugGBlOiDaWiVbzhTjhpRkS1xtAyt6KYtRyTPkP3FT9~NZ2m2n7ah5SfjqWrJZTuEyzkFUYBGNFGMIVVOz1KDI1Xl~d7FUcDDPmui58WLO4BGnPdDx7BByRMfzfKu-HPujfUVZyaVyd4Jo0H6OXJjmS1bENLr2fNZ9w6sCjmm7UTB0-fgZxl1MJEHkpeH1~jSuXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
        {
          src: "https://s3-alpha-sig.figma.com/img/a343/cb0b/49071c34639ec69f2575360509d18652?Expires=1666569600&Signature=M-roSuDRmmPh5zf~44TC7fFSCMMA9U9SvCdQRiVXAGKh5NZ8fEhKPS0WSvSEYxhzkKx3XkWN-vZcnMu0M98h-WGOh0gHnx3PNaRtC850EzOP~RXu14jQza~lo2G5Quj-frxlZVj-XlhwCoYiHb8ugGBlOiDaWiVbzhTjhpRkS1xtAyt6KYtRyTPkP3FT9~NZ2m2n7ah5SfjqWrJZTuEyzkFUYBGNFGMIVVOz1KDI1Xl~d7FUcDDPmui58WLO4BGnPdDx7BByRMfzfKu-HPujfUVZyaVyd4Jo0H6OXJjmS1bENLr2fNZ9w6sCjmm7UTB0-fgZxl1MJEHkpeH1~jSuXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          id: "0",
        },
      ],
    },
    footer: {
      likeCount: 128,
      commentCount: 178,
      liked: true,
    },
  },
} as Meta;

const Template: Story<Props> = (args: Props) => <CommunityDetail {...args} />;

export const 기본 = Template.bind({});
