todo:

- 目录结构
- keycloak引入，以及interceptor添加access token和updatetoken()
- 统一处理401，403，404和500错误，不统一处理409业务错误
- 路由时，console下再分2级路由，全空白的一个，有主菜单的一个，其下再分三级路由；public下默认再分一下，只是全部空白的子页面
- 后端api的数据模型跟着后端api走，模型本身不要和任何组件产生耦合
- 统一分页查询结构
- 对于console页面，需要获取当前用户信息，其实也可以在onAuthSuccess时获取，比如基本信息和ui权限信息，CurrentUser
- 统一几种重要颜色，几种字体颜色，常规字体颜色，强调字体颜色，placeholder字体颜色
- 统一一些边距尺寸等
- css名称全部用中划线，css变量也全部用中划线
- 统一spinner，调用api时传入参数
- 使用css reset，并通过@layer将其变成最低优先级
- 统一console页面的整体页面结构
- 多语言
- 枚举类型全部用ts的enum
- 全部使用standalone的组件
- 使用@for和@if等
- 使用takeuntildestroy()
- 状态管理优先使用BehaviourSubject
- 启用environment
- 目录命名和文件命名统一采用单数
- 目录命名可以省去当前的上下文前缀，比如demo-device下的list-page目录，不用叫demo-device-list-page，而文件命名需要始终带上上下文前缀，比如demo-device-list-page.component.ts，不能叫list-page.component.ts。
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

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

```
npm test
```

## Architecture Decision Records (ADRs)

This project uses [Architecture Decision Records (ADRs)](https://adr.github.io/) to document important architectural decisions. Each ADR is stored in the `ADRs` directory and follows a specific format.

