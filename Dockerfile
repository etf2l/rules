FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Deployment step

FROM busybox:stable as deploy

RUN adduser -D static
USER static
WORKDIR /home/static

COPY --from=build /usr/src/app/build/ ./

LABEL org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.title="rules" \
      org.opencontainers.image.base.name="ghcr.io/etf2l/rules:latest" \
      org.opencontainers.image.description="ETF2L rules" \
      org.opencontainers.image.source="https://github.com/ETF2L/rules"

EXPOSE 11001

CMD ["busybox", "httpd", "-f", "-v", "-p", "11001"]