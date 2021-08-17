module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["babel-plugin-root-import", {
      "paths":  [
        {
          "rootPathSuffix": "app/framework/commerce",
          "rootPathPrefix": "@commerce"
        },
        {
          "rootPathSuffix": "app/providers",
          "rootPathPrefix": "@providers"
        },
        {
          "rootPathSuffix": "app/framework/atg/graphql",
          "rootPathPrefix": "@framework"
        },
        {
          "rootPathSuffix": "app/hook",
          "rootPathPrefix": "@ui-hook"
        },
      ]
    }]
  ]
};
