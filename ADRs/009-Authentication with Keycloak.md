# Authentication with Keycloak

## Context

The application requires authentication, and we don't want to build everything from scratch.

## Decision

We use [keycloak-js](https://github.com/keycloak/keycloak-js) to handle authentication with Keycloak server.

## Implementation

#### Configuration files related to authentication:

- `auth.config.ts`: Initialize Keycloak and configures JWT token interceptor for HttpClient
- `route.config.ts`: Configures `ensureAuthenticatedGuard` to ensure that the user must be authenticated before accessing console pages
- `error.config.ts`: Configures `apiResponseErrorInterceptor` to login the user upon receiving `401` status from backend APIs

#### How authentication works

- In `auth.config.ts`, Keycloak is initialized, but it's only for creating the Keycloak instance, it will not do user login because the
  application contains both public pages and console pages, where the public pages do not need user to login.
- When the user enters console pages, the `ensureAuthenticatedGuard` in `route.config.ts` will ensure the user is logged in, if not, it will
  try login the user, possibly displaying the login page.
- When calling backend APIs, the `includeBearerTokenInterceptor` in `route.config.ts` will first try refresh the JWT token(
  `Keycloak.updatetoken()`) and put the token
  in the HTTP `Authorization` header. Details:
  - If the token is still valid within 60 seconds, the refresh will not happen and existing token will be used
  - If the token expires within 60 seconds, it will try refresh the token and use the refreshed token ever since
  - If the refresh operation fails, for example refresh token itself expires, it will try login the user again by displaying the login page
  - For APIs that does not require token, you can configure `AUTH_EXCLUDED_URLS` in `auth.config.ts`
- When calling backend APIs, if the response status is `401` which means user needs authentication, then `apiResponseErrorInterceptor` in
  `error.config.ts` file will try login the user by displaying the login page.

#### How to access user info

While you can use `Keyloak` directly for accessing current user info, it is required that you do this via `CurrentContextService.user()` to
decouple your own business code from Keycloak as an infrastructure concern. 
