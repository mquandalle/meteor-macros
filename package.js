Package.describe({
  summary: "Des macros pour Meteor",
  version: "0.1.0",
  name: "mquandalle:macros",
  git: "git@github.com:mquandalle/meteor-macros.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileMacro",
  use: [],
  sources: ["plugin/sweet.js"],
  npmDependencies: {"sweet.js": "0.7.1"}
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("mquandalle:macros");
  api.addFiles("tests/exponentiation.m.js");
  api.addFiles("tests/tinytest.js");
});
