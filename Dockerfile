# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:19-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./
COPY nodemon*.json ./
COPY swagger*.json ./
COPY tsconfig*.json ./
COPY .env ./

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
# --production
RUN npm install 

RUN npm install -g nodemon
RUN npm install -g ts-node


#------------------DEVELOPMENT--------------------------------
# Copy local code to the container image.
#COPY . .
# 👀 CMD for Local Deployment. 
#CMD ["npm","run","dev"]

#-----------------PRODUCTION--------------------------------
 COPY ./build ./build
# ENTRYPOINT ["node", "build/index.js"]
# 👀 ENTRYPOINT on Production. 
ENTRYPOINT ["npm", "run", "start"]
