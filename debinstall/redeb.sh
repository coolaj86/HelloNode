#!/usr/bin/env bash

# IMPORTANT 
# Protect agaisnt mispelling a var and rm -rf /
set -u
set -e

SRC=/tmp/hello-node-deb-src
DIST=/tmp/hello-node-deb-dist

rm -rf ${SRC}
rsync -a deb-src/ ${SRC}/
mkdir -p ${SRC}/opt/

rm -rf ${DIST}
mkdir -p ${DIST}/

rsync -a ../HelloNode/ ${SRC}/opt/hello-node/ --delete
rsync -a ./install-chrome.sh ${SRC}/opt/hello-node/bin/

find ${SRC}/ -type d -exec chmod 0755 {} \;
find ${SRC}/ -type f -exec chmod go-w {} \;
chown -R root:root ${SRC}/
pushd ${SRC}/sysroot
tar czf ${DIST}/data.tar.gz [a-z]*
popd
pushd ${SRC}/DEBIAN
tar czf ${DIST}/control.tar.gz *
popd

pushd ${DIST}/
echo 2.0 > ./debian-binary

find ${DIST}/ -type d -exec chmod 0755 {} \;
find ${DIST}/ -type f -exec chmod go-w {} \;
chown -R root:root ${DIST}/
ar r ${DIST}/hellonode-1.deb debian-binary control.tar.gz data.tar.gz
popd
rsync -a ${DIST}/hellonode-1.deb ./

rm -rf ${SRC}
rm -rf ${DIST}
