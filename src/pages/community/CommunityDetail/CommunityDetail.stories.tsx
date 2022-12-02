import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import CommunityDetail from "./CommunityDetail";

export default {
  title: "Pages/community/CommunityDetail/mocks",
  component: CommunityDetail,
} as Meta;

const Template = () => <CommunityDetail />;

export const 수정가능 = buildStory(Template, {
  mswHandlers: mswHandlers.수정가능,
});

export const 수정불가능 = buildStory(Template, {
  mswHandlers: mswHandlers.수정불가능,
});
