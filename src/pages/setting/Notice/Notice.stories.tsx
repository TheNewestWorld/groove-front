import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import Notice from "./Notice";

export default {
  title: "Pages/setting/Notice/mocks",
  component: Notice,
} as Meta;

const Template = () => <Notice />;

export const 성공 = buildStory(Template, { mswHandlers: mswHandlers.성공 });

export const 실패 = buildStory(Template, { mswHandlers: mswHandlers.실패 });
