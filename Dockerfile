FROM node:8.9-alpine

WORKDIR /src/screen-fleet

COPY e2e /src/screen-fleet/e2e
COPY src /src/screen-fleet/src
COPY .angular-cli.json /src/screen-fleet
COPY karma.conf.js /src/screen-fleet
COPY package-lock.json /src/screen-fleet
COPY package.json /src/screen-fleet
COPY protractor.conf.js /src/screen-fleet
COPY tsconfig.json /src/screen-fleet
COPY tslint.json /src/screen-fleet

RUN npm install -g @angular/cli@1.7.4 && \ 
    npm install && \
    pwd && \
    ls

EXPOSE 4200

CMD ls && ng serve --host 0.0.0.0 --port 4200