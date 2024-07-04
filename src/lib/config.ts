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
  // gen 0
  赤井はあと: { enName: "Haachama" },
  アキロゼ: { enName: "Aki" },
  白上フブキ: { enName: "Fubuki" },
  // 1st gen
  大神ミオ: { enName: "Mio" },
  さくらみこ: { enName: "Miko" },
  // 2nd gen
  癒月ちょこ: { enName: "Choco" },
  大空スバル: { enName: "Subaru" },
  湊あくあ: { enName: "Aqua" },
  猫又おかゆ: { enName: "Okayu" },
  // holofantasy (3rd)
  白銀ノエル: { enName: "Noel" },
  兎田ぺこら: { enName: "Pekora" },
  宝鐘マリン: { enName: "Marine" },
  // holoforce (4th)
  天音かなた: { enName: "Kanata" },
  姫森ルーナ: { enName: "Luna" },
  角巻わため: { enName: "Watame" },
  常闇トワ: { enName: "Towa" },
  // NePoLaBo (5th gen)
  桃鈴ねね: { enName: "Nenechi" },
  尾丸ポルカ: { enName: "Polka" },
  雪花ラミィ: { enName: "Lamy" },
  // holoX
  博衣こより: { enName: "Koyori" },
  沙花叉クロヱ: { enName: "Chloe" },
  鷹嶺ルイ: { enName: "Lui" },
  // DEV_IS
  轟はじめ: { enName: "Hajime" },
  火威青: { enName: "Ao" },
  一条莉々華: { enName: "Ririka" },
  儒烏風亭らでん: { enName: "Raden" },
  // -- STARS --
  律可: { enName: "Rikka" },
  岸堂天真: { enName: "Temma" },
  // -- EN --
  Baelz: { enName: "Bae" },
  // -- STARS EN --
  Syrios: { enName: "Axel" },
};
