# Use standalone Angular components

## Context

When using Angular, there are 2 ways of creating components:

- [NgModules based components](https://angular.dev/guide/ngmodules/overview),this is the traditional way of creating components in Angular.
- [Standalone components](https://blog.angular-university.io/angular-standalone-components/), this is a new feature introduced in Angular 14 that allows components to be created without the need for NgModules.

## Decision

We decide to use **standalone components** whenever possible due to:

- it's easier to use and understand
- the code structure is more concise

