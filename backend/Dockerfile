FROM node:16.13.2

LABEL version="1.0"
LABEL description="This is the base docker image for the Plan My Hikes backend API."

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production

COPY . .

EXPOSE 5000

CMD ["node", "server.js"]