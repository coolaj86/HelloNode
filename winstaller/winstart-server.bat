:: %~dp0 is the directory where this file is located, similar to node's __dirname
:: Explanation of %~dp0 http://stackoverflow.com/a/5034119/151312

:: Run a local node instance if it exists, otherwise a global node instance
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" "%~dp0\.\bin\server.js" %*
) ELSE (
  node "%~dp0\.\bin\server.js" %*
)
