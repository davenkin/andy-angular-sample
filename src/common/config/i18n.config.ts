import {
  effect,
  EnvironmentProviders,
  inject,
  LOCALE_ID,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import zhTranslation from '../../../public/i18n/zh.json';
import enTranslation from '../../../public/i18n/en.json';
import { CurrentContextService } from 'common/service/current-context.service';
import localeZh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeZh, 'zh-CN');

export function provideI18n(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: LOCALE_ID, useValue: 'zh-CN' }, //This is just the default locale, use CurrentContextService.locale() to get the real locale dynamically
    provideTranslateService({ lang: 'zh' }),
    provideAppInitializer(() => {
      const translate = inject(TranslateService);
      const currentContext = inject(CurrentContextService);
      translate.setTranslation('zh', zhTranslation);
      translate.setTranslation('en', enTranslation);
      effect(() => {
        translate.use(currentContext.language()); //change language for ngx-translate when language changes
      });
    }),
  ]);
}
