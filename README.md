# The tutorial to use nodejs docker container with docker-compose

## description
The tutorial of structuring docker-compose containers of nginx and node(include express modules) on Raspberry Pi3 B(Ubuntu 20.04) 

## equipments
- Raspberry Pi3 B ... 1
- OS: Ubuntu 20.04 64bit ... 64GB miroSD card
- docker
- docker-compose
  - network: local
## containers
- web server: nginx
- app server: nodejs

## Install docker and docker-compose
How to install docker and docker-compose packages in ARM architecture Raspberry Pi3 B ?
### STEP1
install docker package
```
# apt-get install -y docker
```
### STEP2
install docker-compose using pip3.
if you use apt-get or apt command, you could not install docker-compose latest version.

please exec the setup-docker-compose.sh file.

