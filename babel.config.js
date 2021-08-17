module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["babel-plugin-root-import", {
      "paths":  [
        {
          "rootPathSuffix": "app/configuration",
          "rootPathPrefix": "@configuration"
        },
        {
          "rootPathSuffix": "app/framework/atg/rest",
          "rootPathPrefix": "@rest"
        },
        {
          "rootPathSuffix": "app/framework/commerce",
          "rootPathPrefix": "@commerce"
        },
        {
          "rootPathSuffix": "app/providers",
          "rootPathPrefix": "@providers"
        },
      ]
    }]
  ]
};
