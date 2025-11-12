import {definePreset} from '@primeuix/themes';
import Lara from '@primeuix/themes/Lara';
import {PRIMENG_SEMATIC} from 'common/style/primeng/primeng-sematic';
import {PRIMENG_PRIMITIVE} from 'common/style/primeng/primeng-primitive';

export const PRIMENG_PRESET = definePreset(Lara, {
  primitive: PRIMENG_PRIMITIVE,
  semantic: PRIMENG_SEMATIC,
  components: {
    button: {}
  }
})
