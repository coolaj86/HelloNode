
The main package is in `HelloNode/HelloNode`.

The Mac-Specific install resources are in `HelloNode/macinstall/pkg/Payload.d`
The Mac-Specific scripts are in `HelloNode/macinstall/pkg/Scripts.d`

## preinstall

`node-v0.10.4.pkg` should be installed, upgraded, or ignored.

## install

The contents of `HelloNode/*` should be installed to
`/opt/HelloNode/*` or `/usr/local/lib/HelloNode/*`
(select *HelloNode* to install to */usr/local/lib/* and *include package root*)

`com.hurpdurp.apps.plist` should be installed to `/Library/LaunchDaemons/com.hurpdurp.apps.plist`

## postinstall

`/Library/LaunchDaemons/com.hurpdurp.apps.plist` should be loaded at startup
(and immediately)

## .app

  * http://stackoverflow.com/questions/281372/executing-shell-scripts-from-the-os-x-dock
  * http://mathiasbynens.be/notes/shell-script-mac-apps
