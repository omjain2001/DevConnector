FROM node:14.20.0

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY ["./client/package.json", "./client/package-lock.json*", "./client/"]

RUN npm install --prefix client

COPY . .

CMD ["npm", "run", "dev"]