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

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```
npm test
```

## Integrations

| Integration point                  | Purpose                                                                          | Mechanism |
|------------------------------------|----------------------------------------------------------------------------------|-----------|
| deviceet-device-management-service | This is the main backend API providing functionalities on device management etc. | HTTP      |
| Keycloak                           | User authentication(login)                                                       | HTTP      |

## Architecture Decision Records (ADRs)

This project uses [Architecture Decision Records (ADRs)](https://adr.github.io/) to document important architectural decisions. Each ADR is stored in the `ADRs` directory and follows a specific format.

