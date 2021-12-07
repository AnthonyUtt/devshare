FROM node:14.16.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
COPY lerna.json /usr/src/app/

COPY packages/api/package.json /usr/src/app/packages/api/

RUN yarn
RUN yarn lerna bootstrap

COPY . .

EXPOSE 3030:3030

CMD ["yarn", "workspace", "@devshare/api", "run", "dev"]