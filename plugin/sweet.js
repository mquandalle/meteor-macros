var sweet = Npm.require("sweet.js");

var handler = function (compileStep) {
  var fileContents = compileStep.read().toString('utf8');
  var oldFilename = compileStep.inputPath;
  var newFilename = oldFilename.replace(/\.(m|macro)\.js$/, ".js");

  try {
    output = sweet.compile(fileContents, {
      sourceMap: true,
      filename: oldFilename
    });

    compileStep.addJavaScript({
      path: newFilename,
      sourcePath: compileStep.inputPath,
      data: output.code,
      // @TODO It seems that sourcemap are not working (at least for me on FF33)
      sourceMap: output.sourceMap
    });

  } catch (err) {
    compileStep.error({
      message: "Macros compiler error: " + e.message,
      sourcePath: oldFilename,
      line: e.line,
      column: e.column
    });
  }
}

Plugin.registerSourceHandler("macros.js", handler);
Plugin.registerSourceHandler("m.js", handler);
