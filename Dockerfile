# Import image
FROM node:lts AS build

# Open work directory
WORKDIR /app

# Copy .json files
COPY package*.json .

# install dependencies
RUN npm install

# Copy scripts into workdir
COPY . .

# spin up react app
RUN npm run build

# use lightweight web server to serve the build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Port mapping
EXPOSE 80 

# start nginx server
CMD ["nginx", "-g", "daemon off;"]
