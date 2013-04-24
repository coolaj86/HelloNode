#!/usr/bin/env bash

# make sure that the previous installation is done
sleep 5

# http://blog.coolaj86.com/articles/google-repos-for-linux.html

apt-get install curl && \
wget -q -E https://gist.github.com/raw/4686647/ubuntu-install-google.bash -O - \
| bash

apt-get install -y google-chrome-stable
