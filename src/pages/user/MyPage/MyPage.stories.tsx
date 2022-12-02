import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import MyPage from "./MyPage";
import * as mswHandlers from "./mocks/mswHandler";

export default {
  title: "Pages/user/MyPage/mocks",
  component: MyPage,
} as Meta;

const Template = () => <MyPage />;

export const 데이터_있음 = buildStory(Template, {
  mswHandlers: mswHandlers.데이터_있음,
});

export const 데이터_없음 = buildStory(Template, {
  mswHandlers: mswHandlers.데이터_없음,
});
