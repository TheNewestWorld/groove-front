import { Meta } from "@storybook/react";
import { buildStory } from "../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import SignIn from "./SignIn";

export default {
  title: "Pages/SignIn/mocks",
  component: SignIn,
} as Meta;

const Template = () => <SignIn />;

export const 성공 = buildStory(Template, { mswHandlers: mswHandlers.성공 });

export const 실패 = buildStory(Template, { mswHandlers: mswHandlers.실패 });
