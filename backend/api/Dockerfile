FROM node:16-bullseye
WORKDIR /myapp
COPY src/package*.json .
RUN npm install
COPY  src/ ./
EXPOSE 8080
CMD [ "node", "app.js"]
# CMD ["/bin/ls", "-lR", "controllers" ]