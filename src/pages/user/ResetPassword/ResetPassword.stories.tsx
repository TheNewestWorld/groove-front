import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import RoutePath from "../../../constants/routePath";
import * as mswHandlers from "./mocks/mswHandler";
import ResetPassword from "./ResetPassword";

export default {
  title: "Pages/user/ResetPassword/mocks",
  component: ResetPassword,
} as Meta;

const Template = () => <ResetPassword />;

export const 성공 = buildStory(Template, {
  mswHandlers: mswHandlers.성공,
  renderEnv: {
    locationPath: `${RoutePath.resetPassword}?sessionKey=sessionKey`,
    routePath: RoutePath.resetPassword,
  },
});

export const 실패 = buildStory(Template, { mswHandlers: mswHandlers.실패 });
