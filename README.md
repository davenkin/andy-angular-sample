todo:

- keycloak引入，以及interceptor添加access token和updatetoken()
- 后端api的数据模型跟着后端api走，模型本身不要和任何组件产生耦合

## Introduction

This is a sample Angular project with the following features:

- Contains both public pages and authenticated pages
- Use PrimeNG built-in icon library `primeicons`

## Tech stacks

- Angular 20

## Local run

To start a local development server, run:

```
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will
automatically reload whenever you modify any of the source files.

## Build

To build the project run:

```
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build
optimizes your application for performance and speed.

## Docker

To build a docker image, first build the whole project:

```
npm run build
```

Then create Docker image:

```
docker build -t andy-angular-sample:0.0.1 .
```

Now you can run the application using Docker:

```
docker run -d -p 4200:8080 andy-angular-sample:0.0.1
```

## Running unit tests

```
npm test
```

## Architecture Decision Records (ADRs)

This project uses [Architecture Decision Records (ADRs)](https://adr.github.io/) to document important architectural
decisions. Each ADR is stored in the `ADRs` directory and follows a specific format.

## Local keycloak setup

- Run `./start-docker-compose.sh` to start local keycloak server
- Open `http://localhost:8765` use account `admin/admin` to login
- Create a realm named `test-realm`
- In `test-realm`, create a client named `test-client`:
  - Enable `Standard flow` for `Authentication flow`
  - Set `Valid redirect URIs` to `http://localhost:4200/*`
  - Set `Web origins` to `*`
- In `test-realm`, create a user named `test-user` and set password credentials for it
- Now you are ready to open `http://localhost:4200` and login using Keycloak user
- Run `stop-docker-compose.sh` to stop docker, the next time you run `./start-docker-compose.sh` the previous
  `test-realm`, `test-client` and `test-user` will stay
