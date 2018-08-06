FROM node:10-alpine as base
# Increase node limits
ENV NODE_OPTIONS="--max-old-space-size=4096"
# Create app directory
WORKDIR /api/src

# Install app dependencies

COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]