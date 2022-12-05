import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import CommunityCommentList from "./CommunityCommentList";

export default {
  title: "Pages/community/CommunityCommentList/mocks",
  component: CommunityCommentList,
} as Meta;

const Template = () => <CommunityCommentList />;

export const 데이터_있음 = buildStory(Template, {
  mswHandlers: mswHandlers.데이터_있음,
});

export const 데이터_없음 = buildStory(Template, {
  mswHandlers: mswHandlers.데이터_없음,
});
