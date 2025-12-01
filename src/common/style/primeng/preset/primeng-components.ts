// This file contains customizations to primeng components
// This file is the first place you should resort to when customize primeng components, more detail please refer to "006-CSS strategy.md"

export const PRIMENG_COMPONENTS = {
  button: {
    root: {
      focusRing: {
        width: 'var(--2px)',
        style: 'solid',
        color: 'var(--primary-color)',
        offset: 'var(--2px)',
        shadow: 'none',
      },
    },
    colorScheme: {
      light: {
        root: {
          primary: {
            focusRing: {
              color: 'var(--primary-color)',
              shadow: 'none',
            },
          },
          secondary: {
            color: 'var(--secondary-text-color)',
            focusRing: {
              color: 'var(--primary-color)',
              shadow: 'none',
            },
          },
          warn: {
            background: 'var(--warn-color)',
            borderColor: 'var(--warn-color)',
            focusRing: {
              color: 'var(--primary-color)',
              shadow: 'none',
            },
          },
          danger: {
            background: 'var(--error-color)',
            borderColor: 'var(--error-color)',
            focusRing: {
              color: 'var(--primary-color)',
              shadow: 'none',
            },
          },
        },
        text: {
          secondary: {
            color: 'var(--secondary-text-color)',
          },
          warn: {
            color: 'var(--warn-color)',
          },
          danger: {
            color: 'var(--error-color)',
          },
        },
      },
    },
  },
};
