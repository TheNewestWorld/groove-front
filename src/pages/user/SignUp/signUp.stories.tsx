import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import SignUp from "./SignUp";

export default {
  title: "Pages/user/SignUp/mocks",
  component: SignUp,
} as Meta;

const Template = () => <SignUp />;

export const 성공 = buildStory(Template, { mswHandlers: mswHandlers.성공 });

export const 실패 = buildStory(Template, { mswHandlers: mswHandlers.실패 });
