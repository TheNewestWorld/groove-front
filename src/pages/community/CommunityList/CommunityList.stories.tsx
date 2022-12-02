import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import CommunityList from "./CommunityList";

export default {
  title: "Pages/community/CommunityList/mocks",
  component: CommunityList,
} as Meta;

const Template = () => <CommunityList />;

export const 데이터_있음 = buildStory(Template, {
  mswHandlers: mswHandlers.데이터_있음,
});

export const 데이터_없음 = buildStory(Template, {
  mswHandlers: mswHandlers.데이터_없음,
});
