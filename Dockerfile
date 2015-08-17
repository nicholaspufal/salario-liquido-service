FROM        ubuntu:14.04

RUN         apt-get update
RUN         apt-get install -y npm
RUN         ln -s /usr/bin/nodejs /usr/bin/node

COPY        . /src/salario-liquido-service
WORKDIR     /src/salario-liquido-service

EXPOSE     3000
CMD        ["sh", "-c", "./bin/server"]
