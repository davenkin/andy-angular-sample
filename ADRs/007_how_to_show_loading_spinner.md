# How to show loading spinner

## Context

Loading spinners have various scopes:

- Spinners that cover the whole page
- Spinners that cover the main content area, excluding the navigation menu area
- Spinners that cover only a specific area

## Decision

We uses `spinner.service.ts` to centrally manage all types of spinners.

## Implementation

- Show global spinner: `SpinnerService.showGlobalSpinner()`
- Hide global spinner: `SpinnerService.hideGlobalSpinner()`
- Show main content spinner: `SpinnerService.showConsoleMainSpinner()`
- Hide main content spinner: `SpinnerService.hideConsoleMainSpinner()`
- Show spinner for a specific area: `SpinnerService.show(demoDeviceSpinner)`, this requires you add a `app-spinner`
  component explicitly into your component where you want to show the spinner.
  ```
  <app-spinner [name]="demoDeviceSpinner"></app-spinner>
  ```
- Hide spinner for a specific area: `SpinnerService.hide(demoDeviceSpinner)`
