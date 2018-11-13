# Class Enrolment API 

Rest API developed using hapi (a nodejs framework) and 
MongoDb - models/schemas using mongoose.
Using Auth0 for authentication.

Prerequisites:
-  install nvm
- install mongodb / docker run --name mongo -d -p 27017:27017 mongo

CentOS 7 instructions:
1. install docker according to:
https://docs.docker.com/install/linux/docker-ce/centos/#set-up-the-repository

2. sudo systemctl start docker

3. docker run mongo

To start:
- nvm install
- nvm use
- npm start

using docker image:
I have used the alpine-node image, if you don;t have it run:
docker run mhart/alpine-node yarn






