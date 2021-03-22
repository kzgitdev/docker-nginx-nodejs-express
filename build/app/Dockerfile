ARG NODE_TAG

FROM node:$NODE_TAG

ARG APP_DIR
ARG USERNAME
ARG UID

ENV USERNAME=$USERNAME
ENV UID=$UID
ENV APP_DIR $APP_DIR
ENV HOME /home/$USERNAME
ENV NODE_PATH /usr/local/lib/node_modules

RUN apt-get update && apt-get -y upgrade

WORKDIR $APP_DIR
COPY ./packages.json $APP_DIR/
COPY ./server.js $APP_DIR/
RUN npm install &&  npm install -g express --save

RUN useradd -m -s /bin/bash -u $UID $USERNAME && \
    chown -R $USERNAME. $APP_DIR

USER $USERNAME
WORKDIR $APP_DIR

EXPOSE 3000

CMD [ "node", "server.js" ]
