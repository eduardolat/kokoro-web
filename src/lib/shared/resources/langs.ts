export type Lang = (typeof langs)[number];
export type LangId = Lang["id"];

// The id of langs should match an espeak-ng language code.
// https://github.com/espeak-ng/espeak-ng/blob/master/docs/languages.md

export const langs = [
  {
    id: "en-us",
    name: "English (US)",
  },
  {
    id: "en-gb",
    name: "English (UK)",
  },
  {
    id: "ja",
    name: "Japanese",
  },
  {
    id: "cmn",
    name: "Chinese",
  },
  {
    id: "es-419",
    name: "Spanish",
  },
  {
    id: "fr-fr",
    name: "French",
  },
  {
    id: "hi",
    name: "Hindi",
  },
  {
    id: "it",
    name: "Italian",
  },
  {
    id: "pt-br",
    name: "Portuguese (Brazil)",
  },
] as const;

export const langsMap: Record<LangId, Lang> = (() => {
  const map: Record<LangId, Lang> = {} as Record<LangId, Lang>;
  for (const lang of langs) {
    map[lang.id] = lang;
  }
  return map;
})();

export const langsIds = langs.map((lang) => lang.id);
