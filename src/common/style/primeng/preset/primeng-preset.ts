import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/Lara';
import { PRIMENG_SEMATIC } from './primeng-sematic';
import { PRIMENG_PRIMITIVE } from './primeng-primitive';
import { PRIMENG_COMPONENTS } from './primeng-components';

export const PRIMENG_PRESET = definePreset(Lara, {
  primitive: PRIMENG_PRIMITIVE,
  semantic: PRIMENG_SEMATIC,
  components: PRIMENG_COMPONENTS,
});
