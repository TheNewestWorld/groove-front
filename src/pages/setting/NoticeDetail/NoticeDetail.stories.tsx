import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import NoticeDetail from "./NoticeDetail";

export default {
  title: "Pages/setting/NoticeDetail/mocks",
  component: NoticeDetail,
} as Meta;

const Template = () => <NoticeDetail />;

export const 성공 = buildStory(Template, { mswHandlers: mswHandlers.성공 });

export const 실패 = buildStory(Template, { mswHandlers: mswHandlers.실패 });
