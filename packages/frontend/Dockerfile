FROM node:14.16.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
COPY lerna.json /usr/src/app/

COPY packages/common/package.json /usr/src/app/packages/common/
COPY packages/frontend/package.json /usr/src/app/packages/frontend/

RUN yarn
RUN yarn lerna bootstrap

COPY . .

EXPOSE 8000:8000

CMD ["yarn", "workspace", "@devshare/frontend", "run", "dev"]