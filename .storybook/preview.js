import { addDecorator } from "@storybook/react";
import { initializeWorker, mswDecorator } from "msw-storybook-addon";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

initializeWorker();
addDecorator(mswDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "iphonex",
  },
};
