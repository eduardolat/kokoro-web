import { langsMap, type LangId } from "./langs";

export type Voice = (typeof voices)[number];
export type VoiceId = Voice["id"];

const englishUs = langsMap["en-us"];
const englishGb = langsMap["en-gb"];
const french = langsMap["fr-fr"];
const japanese = langsMap["ja"];
const chinese = langsMap["cmn"];
const spanish = langsMap["es-419"];
const hindi = langsMap["hi"];
const italian = langsMap["it"];
const portuguese = langsMap["pt-br"];

const genderMale = "Male";
const genderFemale = "Female";

export const voices = [
  {
    id: "af_heart",
    name: "Heart",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "A",
    overallGrade: "A",
  },
  {
    id: "af_alloy",
    name: "Alloy",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "af_aoede",
    name: "Aoede",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    id: "af_bella",
    name: "Bella",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "A",
    overallGrade: "A-",
  },
  {
    id: "af_jessica",
    name: "Jessica",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "af_kore",
    name: "Kore",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    id: "af_nicole",
    name: "Nicole",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "B-",
  },
  {
    id: "af_nova",
    name: "Nova",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "af_river",
    name: "River",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "af_sarah",
    name: "Sarah",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    id: "af_sky",
    name: "Sky",
    lang: englishUs,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C-",
  },
  {
    id: "am_adam",
    name: "Adam",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "D",
    overallGrade: "F+",
  },
  {
    id: "am_echo",
    name: "Echo",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "am_eric",
    name: "Eric",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "am_fenrir",
    name: "Fenrir",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    id: "am_liam",
    name: "Liam",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "am_michael",
    name: "Michael",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    id: "am_onyx",
    name: "Onyx",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "am_puck",
    name: "Puck",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    id: "am_santa",
    name: "Santa",
    lang: englishUs,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D-",
  },
  {
    id: "bf_emma",
    name: "Emma",
    lang: englishGb,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "B-",
  },
  {
    id: "bf_isabella",
    name: "Isabella",
    lang: englishGb,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "bm_george",
    name: "George",
    lang: englishGb,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "bm_lewis",
    name: "Lewis",
    lang: englishGb,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D+",
  },
  {
    id: "bf_alice",
    name: "Alice",
    lang: englishGb,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "bf_lily",
    name: "Lily",
    lang: englishGb,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "bm_daniel",
    name: "Daniel",
    lang: englishGb,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "bm_fable",
    name: "Fable",
    lang: englishGb,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "ef_dora",
    name: "Dora",
    lang: spanish,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "em_alex",
    name: "Alex",
    lang: spanish,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "em_santa",
    name: "Santa",
    lang: spanish,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "ff_siwis",
    name: "Siwis",
    lang: french,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "B-",
  },
  {
    id: "jf_alpha",
    name: "Alpha",
    lang: japanese,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C+",
  },
  {
    id: "jf_gongitsune",
    name: "Gongitsune",
    lang: japanese,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "jf_nezumi",
    name: "Nezumi",
    lang: japanese,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C-",
  },
  {
    id: "jf_tebukuro",
    name: "Tebukuro",
    lang: japanese,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "jm_kumo",
    name: "Kumo",
    lang: japanese,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C-",
  },
  {
    id: "zf_xiaobei",
    name: "Xiaobei",
    lang: chinese,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "zf_xiaoni",
    name: "Xiaoni",
    lang: chinese,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "zf_xiaoxiao",
    name: "Xiaoxiao",
    lang: chinese,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "zf_xiaoyi",
    name: "Xiaoyi",
    lang: chinese,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "zm_yunjian",
    name: "Yunjian",
    lang: chinese,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "zm_yunxi",
    name: "Yunxi",
    lang: chinese,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "zm_yunxia",
    name: "Yunxia",
    lang: chinese,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "zm_yunyang",
    name: "Yunyang",
    lang: chinese,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "hf_alpha",
    name: "Alpha",
    lang: hindi,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "hf_beta",
    name: "Beta",
    lang: hindi,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "hm_omega",
    name: "Omega",
    lang: hindi,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "hm_psi",
    name: "Psi",
    lang: hindi,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "if_sara",
    name: "Sara",
    lang: italian,
    gender: genderFemale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "im_nicola",
    name: "Nicola",
    lang: italian,
    gender: genderMale,
    targetQuality: "B",
    overallGrade: "C",
  },
  {
    id: "pf_dora",
    name: "Dora",
    lang: portuguese,
    gender: genderFemale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "pm_alex",
    name: "Alex",
    lang: portuguese,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
  {
    id: "pm_santa",
    name: "Santa",
    lang: portuguese,
    gender: genderMale,
    targetQuality: "C",
    overallGrade: "D",
  },
] as const;

export const voicesMap = (() => {
  const map = {} as Record<VoiceId, Voice>;
  voices.forEach((voice) => {
    map[voice.id] = voice;
  });
  return map;
})();

export const voicesIds = voices.map((voice) => voice.id);

export const voicesByLang: Record<LangId, Voice[]> = (() => {
  const map = {} as Record<LangId, Voice[]>;

  for (const voice of voices) {
    const langId = voice.lang.id;
    if (!map[langId]) map[langId] = [];
    map[langId].push(voice);
  }

  return map;
})();
