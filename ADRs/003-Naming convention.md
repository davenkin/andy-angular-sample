# Naming convention

## Context

A consistent naming convention makes the code easier to understand and enhances the code maintainability in the long
run.

## Decision

We follow the below naming conventions:

| Situation                               | Naming format        | Example                      | Note                           |
|-----------------------------------------|----------------------|------------------------------|--------------------------------|
| Page components(Components with routes) | xxx.page.ts          | `design-system.page.ts`      | To make page component explict |
| Pages with list data                    | xxx-list.page.ts     | `device-list.page.ts`        |                                |
| Components in table cells               | xxx.cell.ts          | `device-name.cell.ts`        |                                |
| Dialog components                       | xxx.dialog.ts        | `edit-device-name.dialog.ts` |                                |
| Regular components                      | xxx.components.ts    | `spinner.component.ts`       |                                |
| Directives                              | xxx.directive.ts     | `file-size.directive.ts`     |                                |
| API clients                             | xxx.api.ts           | `device.api.ts`              |                                |
| Store services                          | xxx-store.service.ts | `device-store.service.ts`    |                                |
| Regular services                        | xxx.service.ts       | `feature-toggle.service.ts`  |                                |
| Files containing data models            | xxx.model.ts         | `common.model.ts`            |                                |
| CSS classes                             | xxx-yyy              | `main-content`               | Use all lowercases with dashes |
| CSS variables                           | --xxx-yyy            | `--primary-text-color`       | Use all lowercases with dashes |
| Class names                             | AbcXyz               | `DeviceListPage`             |                                |
| JS variable names                       | abcXyz               | `currentState`               |                                |
| Utility class file names                | xxx.utils.ts         | `pagination.utils.ts`        |                                |
| Configuration files                     | xxx.config.ts        | `route.config.ts`            |                                |


