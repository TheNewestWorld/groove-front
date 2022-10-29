import { Meta } from "@storybook/react";
import { buildStory } from "../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import Sample from "./Sample";

export default {
  title: "Pages/Sample/mock",
  component: Sample,
} as Meta;

const Template = () => <Sample />;

export const A = buildStory(Template, { mswHandlers: mswHandlers.샘플_A });

export const B = buildStory(Template, { mswHandlers: mswHandlers.샘플_B });
