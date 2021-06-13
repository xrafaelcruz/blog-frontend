const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "src": path.resolve(__dirname, "../src"),
      "components": path.resolve(__dirname, "../src/components"),
      "utils": path.resolve(__dirname, "../src/utils"),
      "graphql/client": path.resolve(__dirname, "../src/graphql/client"),
      "graphql/queries/getPosts": path.resolve(__dirname, "../src/graphql/queries/getPosts"),
      "styles/global": path.resolve(__dirname, "../src/styles/global"),
      "styles/storybook": path.resolve(__dirname, "../src/styles/storybook"),
    };

    return config;
  },
}
