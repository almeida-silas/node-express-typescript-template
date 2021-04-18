FROM node:14.15.4

WORKDIR /usr/app

COPY . .

RUN dir

RUN yarn install

RUN yarn run build

EXPOSE 80

RUN chmod +x entrypoint.sh

ENTRYPOINT ["/usr/app/entrypoint.sh"]
