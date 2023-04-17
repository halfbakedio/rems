import { initialize, mswDecorator } from "msw-storybook-addon";

import "../src/styles/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

initialize();

export const decorators = [mswDecorator];