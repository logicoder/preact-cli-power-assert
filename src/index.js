const preactCliPowerAssert = (config, env) => {
  if (!config) {
    throw Error("You need to pass the webpack config to preactCliPowerAssert");
  }
  if (process.env.NODE_ENV !== "test") {
    return;
  }

  const loaders = config.module.loaders;
  const babelLoader = loaders.filter(loader => loader.loader === "babel-loader")[0];
  const plugins = babelLoader.options.plugins;

  plugins.push(require("babel-plugin-empower-assert"));
  plugins.push(require("babel-plugin-espower"));
};

module.exports = preactCliPowerAssert;
