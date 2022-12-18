import { Meta } from "@storybook/react";
import { buildStory } from "../../../common/configs/storybook";
import * as mswHandlers from "./mocks/mswHandler";
import QnANew from "./QnANew";

export default {
  title: "Pages/setting/QnANew/mock",
  component: QnANew,
} as Meta;

const Template = () => <QnANew />;

export const 성공 = buildStory(Template, { mswHandlers: mswHandlers.성공 });

export const 실패 = buildStory(Template, { mswHandlers: mswHandlers.실패 });

