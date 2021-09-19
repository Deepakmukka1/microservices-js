FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000 3001
CMD ["node","app.js"]