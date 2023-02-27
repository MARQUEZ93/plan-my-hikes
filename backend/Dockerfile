FROM node:16.13.2

LABEL version="1.0"
LABEL description="This is the base docker image for the Plan My Hikes backend API."
# dev only 
RUN npm install -g nodemon

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
# RUN npm install --production
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
# CMD ["node", "server.js"]