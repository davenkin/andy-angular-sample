todo:

- 目录结构
- keycloak引入，以及interceptor添加access token和updatetoken()
- 统一处理401，403，404和500错误，不统一处理409业务错误
- 路由时，console下再分2级路由，全空白的一个，有主菜单的一个，其下再分三级路由；public下默认再分一下，只是全部空白的子页面
- 后端api的数据模型跟着后端api走，模型本身不要和任何组件产生耦合
- 统一分页查询结构
- 统一console页面的整体页面结构
- 枚举类型全部用ts的enum
- 全部使用standalone的组件
- 使用@for和@if等
- 状态管理优先使用Signal
- adr common: 目录命名和文件命名统一采用单数
- docker keycloak从后端迁移到本项目

-
目录命名可以省去当前的上下文前缀，比如demo-device下的list-page目录，不用叫demo-device-list-page，而文件命名需要始终带上上下文前缀，比如demo-device-list-page.component.ts，不能叫list-page.component.ts。

- CSS命名使用中划线，不用驼峰命名法

## Introduction

This is a sample Angular project with the following features:

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
