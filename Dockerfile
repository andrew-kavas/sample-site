FROM node:14.13.0-alpine
WORKDIR /index
COPY package.json /index
RUN npm install
COPY . /index
CMD ["npm", "start"]