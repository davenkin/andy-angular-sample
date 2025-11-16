# Common best coding practices

## Context

Some small pieces of common coding practices don't deserve a standalone ADR but still need to be aligned across the whole team.

## Decision

We decide use this ADR to list all the common coding practices in the below `Implementation` section.

## Implementation

- Favor [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) over [SCSS variables](https://sass-lang.com/documentation/variables/) as CSS variables are built in support from CSS.
- All CSS variables should use all lower case letters with dashes as word separators, such as `--primay-color`.
- All CSS selectors should use all lower case letters with dashes as word separators, such as `main-content`.
