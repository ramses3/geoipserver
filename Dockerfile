FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
COPY geocode/package.json .
RUN npm install
COPY geocode/ .
RUN chown -R app /opt/app
USER app
EXPOSE 4000
CMD [ "npm", "run", "pm2" ]