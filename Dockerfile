FROM node:latest
MAINTAINER Juan Crisostomo

RUN mkdir -p /opt/app
COPY . /opt/app
RUN cd /opt/app && npm install

WORKDIR /opt/app

CMD ["npm", "run", "build"]
