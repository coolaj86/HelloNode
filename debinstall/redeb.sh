#!/usr/bin/env bash

rm -rf deb-src/opt/hello-node/
mkdir -p deb-src/opt/

rm -rf deb-dist/
mkdir -p deb-dist/

rsync -avhP ../HelloNode/ deb-src/opt/hello-node/ --delete
pushd deb-src/
tar czf ../deb-dist/data.tar.gz [a-z]*
pushd DEBIAN
tar czf ../../deb-dist/control.tar.gz *
popd
popd

pushd deb-dist/
echo 2.0 > ./debian-binary
ar r ../hellonode-1.deb debian-binary control.tar.gz data.tar.gz
popd

rm -rf deb-src/opt/hello-node/
rm -rf deb-dist/
