const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-controls",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  features: {
    emotionAlias: false,
  },
  staticDirs: ["../public"],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: [
        {
          loader: "postcss-loader",
          options: { implementation: require.resolve("postcss") },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    config.resolve.extensions.push(".gql");
    config.resolve.extensions.push(".graphql");

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": toPath("src"),
      "@components": toPath("src/components"),
      "@pages": toPath("src/pages"),
      "@services": toPath("src/services"),
      "@store": toPath("src/store"),
      "@styles": toPath("src/styles"),
      "~features": toPath("src/features"),
      "~hooks": toPath("src/hooks"),
      "~types": toPath("src/types"),
    };
 
    return config;
  },
}
