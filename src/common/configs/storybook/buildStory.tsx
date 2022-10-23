import { Story } from "@storybook/react";
import { RestHandler } from "msw";
import { withWrappers } from ".";

type Props = {
  mswHandlers: RestHandler[];
  renderEnv?: {
    locationPath: string;
    routePath: string;
  };
};

const buildStory = (Template: Story, { mswHandlers, renderEnv }: Props) => {
  const story = Template.bind({});

  story.parameters = {
    msw: mswHandlers,
    renderEnv,
  };

  story.decorators = [
    withWrappers({
      locationPath: renderEnv?.locationPath ?? "/",
      routePath: renderEnv?.routePath ?? "/",
    }),
  ];

  return story;
};

export default buildStory;
