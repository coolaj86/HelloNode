## Create Package

The package is created in `/tmp`,  `chown`d to `root`, and `chmod`d to standard permissions

    sudo ./redeb.sh
    lintian hellonode-1.deb 2>&1 | grep -v node_modules | grep -v dir-or-file-in-opt

## Install

    sudo dpkg -i hellonode-1.deb

## Resources

  * http://unix.stackexchange.com/questions/30303/how-to-create-a-deb-file-manually
  * http://unix.stackexchange.com/a/30435
