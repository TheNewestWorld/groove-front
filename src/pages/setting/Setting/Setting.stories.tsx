import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import RoutePath from "../../../constants/routePath";
import Setting from "./Setting";

export default {
  title: "Pages/setting/Setting/mocks",
  component: Setting,
} as Meta;

const Template = () => <Setting />;

export const 기본 = buildStory(Template, {
  mswHandlers: [],
  renderEnv: {
    locationPath: RoutePath.setting,
    routePath: RoutePath.setting,
  },
});
