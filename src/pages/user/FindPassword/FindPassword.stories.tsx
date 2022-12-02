import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import FindPassword from "./FindPassword";

export default {
  title: "Pages/user/FindPassword/mocks",
  component: FindPassword,
} as Meta;

const Template = () => <FindPassword />;

export const 성공 = buildStory(Template, { mswHandlers: mswHandlers.성공 });

export const 실패 = buildStory(Template, { mswHandlers: mswHandlers.실패 });
