## Windows Installer

See [How to Create an InnoSetup Installer](http://blog.coolaj86.com/articles/how-to-create-an-innosetup-installer.html)
for details on how this installer was created.

This is the Windows Installer for HelloNode. It uses

  * [Non-Sucking Service Manager (nssm) 2.16](http://nssm.cc/download/nssm-2.16.zip) ([nssm.cc](http://nssm.cc))
  * [InnoSetup 5.5.3 (unicode)](http://www.jrsoftware.org/download.php/is-unicode.exe) ([jrsoftware.org](http://jrsoftware.org))
  * [NodeJS v0.10.4](http://nodejs.org/dist/v0.10.4/x64/node-v0.10.4-x64.msi) ([nodejs.org](http://nodejs.org))
  * [HelloNode](https://github.com/coolaj86/HelloNode/tree/master/HelloNode) ([github.com/coolaj86/HelloNode](https://github.com/coolaj86/HelloNode))

## Beware CRLF

Note that `.gitattributes` specifies `winstaller/winstart-browser.bat eof=crlf`.
This is so that the file can be edited on Operating Systems,
but will still function on Windows.

## Known Issues

Windows is a tough beast. InnoSetup helps, but it isn't as simple as deb or pkg by any means.

  <https://github.com/coolaj86/HelloNode/issues?labels=InnoSetup&page=1&state=open>

## Resources

  [How to set up Windows Firewall from Commandline](http://support.microsoft.com/kb/947709)
  [Conditionals in InnoSetup](http://stackoverflow.com/questions/3493416/how-to-run-a-file-before-setup-with-inno-setup)
  [How to manually delete a Windows System Service](http://geekswithblogs.net/shahedul/archive/2006/10/13/93984.aspx)
