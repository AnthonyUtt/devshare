FROM node:14.16.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
COPY lerna.json /usr/src/app/

COPY packages/common/package.json /usr/src/app/packages/common/
COPY packages/web/package.json /usr/src/app/packages/web/

RUN yarn
RUN yarn lerna bootstrap

COPY . .

EXPOSE 3000:3000

CMD ["yarn", "workspace", "@devshare/web", "run", "dev"]