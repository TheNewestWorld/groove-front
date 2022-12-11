import { Meta, Story } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import RoutePath from "../../../constants/routePath";
import ActiveUser from "./ActiveUser";
import * as mswHandlers from "./mocks/mswHandler";

export default {
  title: "Pages/user/ActiveUser/mocks",
  component: ActiveUser,
} as Meta;

const Template: Story = () => <ActiveUser />;

export const 성공 = buildStory(Template, {
  mswHandlers: mswHandlers.성공,
  renderEnv: {
    locationPath: `${RoutePath.activeUser}?sessionKey=sessionKey`,
    routePath: RoutePath.activeUser,
  },
});
