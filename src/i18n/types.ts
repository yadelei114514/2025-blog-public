export type Language = 'zh-CN' | 'en' | 'zh-TW' | 'ja' | 'ko';

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  'zh-CN': Translation;
  'en': Translation;
  'zh-TW': Translation;
  'ja': Translation;
  'ko': Translation;
}