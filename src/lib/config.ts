import { Branch, Talent } from "@/types/holo";
import { IDictionary } from "@/types/utils";

const BASE_URL = "https://schedule.hololive.tv";

export const TIMEZONE = "Europe/Zurich";

export const BRANCHES: IDictionary<Branch> = {
  all: {
    apiUrl: `${BASE_URL}/api/list/1`,
    name: "All talents",
  },
  en: {
    apiUrl: `${BASE_URL}/api/list/8`,
    name: "Hololive EN",
  },
  jp: {
    apiUrl: `${BASE_URL}/api/list/2`,
    name: "Hololive JP",
  },
  id: {
    apiUrl: `${BASE_URL}/api/list/6`,
    name: "Hololive ID",
  },
  stars: {
    apiUrl: `${BASE_URL}/api/list/10`,
    name: "Holostars",
  },
  stars_jp: {
    apiUrl: `${BASE_URL}/api/list/3`,
    name: "Holostars JP",
  },
  stars_en: {
    apiUrl: `${BASE_URL}/api/list/9`,
    name: "Holostars EN",
  },
};

export const TALENTS: IDictionary<Talent> = {
  ホロライブ: { enName: "Hololive main ch." },
  // -- JP --
  角巻わため: { enName: "Watame" },
  白銀ノエル: { enName: "Noel" },
  博衣こより: { enName: "Koyori" },
  姫森ルーナ: { enName: "Luna" },
  アキロゼ: { enName: "Aki" },
  天音かなた: { enName: "Kanata" },
  大空スバル: { enName: "Subaru" },
  沙花叉クロヱ: { enName: "Chloe" },
  癒月ちょこ: { enName: "Choco" },
  尾丸ポルカ: { enName: "Polka" },
  大神ミオ: { enName: "Mio" },
  兎田ぺこら: { enName: "Pekora" },
  宝鐘マリン: { enName: "Marine" },
  常闇トワ: { enName: "Towa" },
  鷹嶺ルイ: { enName: "Lui" },
  湊あくあ: { enName: "Aqua" },
  // -- EN --
  Baelz: { enName: "Bae" },
  // -- STARS EN --
  Syrios: { enName: "Axel" },
};
