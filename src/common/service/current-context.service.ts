import { computed, Injectable, signal } from '@angular/core';

const LANGUAGE_TO_LOCALE: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en-US',
};

export interface CurrentOrg {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class CurrentContextService {
  private readonly LANGUAGE_KEY = '__language';
  private readonly ORG_KEY = '__org';
  private _language = signal(localStorage.getItem(this.LANGUAGE_KEY) || 'zh');
  public language = this._language.asReadonly();
  public locale = computed(() => LANGUAGE_TO_LOCALE[this.language()]);
  private _org = signal<CurrentOrg | undefined>(JSON.parse(localStorage.getItem(this.ORG_KEY) || 'null') || undefined);
  public org = this._org.asReadonly();
  public orgId = computed(() => this._org()?.id);

  public changeLanguage(language: string) {
    const supportedLanguages = Object.keys(LANGUAGE_TO_LOCALE);
    if (supportedLanguages.includes(language)) {
      this._language.set(language);
      localStorage.setItem(this.LANGUAGE_KEY, this.language());
    } else {
      console.error(
        `Failed to change language to [${language}] as it's not supported, the supported languages are [${supportedLanguages}].`,
      );
    }
  }

  public setOrg(org: CurrentOrg) {
    this._org.set(org);
    localStorage.setItem(this.ORG_KEY, JSON.stringify(org));
  }
}

// todo: 需要一个current-org.initilizer.ts或者在ConsolePageBaseComponent完成，对于org用户则通过调用后端api获取org数据后再调用setOrg()，对于超级用户则不用做任何事情。
