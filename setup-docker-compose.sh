#!/bin/bash

apt-get install libffi-dev libssl-dev
apt install python3-dev
apt-get install -y python3 python3-pip

pip3 install docker-compose

ln -s /usr/local/bin/docker-compose /user/bin/docker-compose

