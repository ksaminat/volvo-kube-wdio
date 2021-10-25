FROM node:14.16
LABEL maintainer="Labs42"

WORKDIR /usr/app/tester
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json
COPY . .
RUN npm install


ENTRYPOINT ["npm", "run", "test"]
