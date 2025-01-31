export interface Branch {
  apiUrl: string;
  pageUrl: string;
  name: string;
}

export interface Talent {
  apiName: string;
  nickname?: string;
  name: string;
  fanMark?: string;
  twitterAccount?: string;
  youtubeChannel?: string;
  agency?: string;
  generation?: string;
  generationId?: number;
  status: "active" | "affiliate" | "graduated";
  colors?: {
    light: string;
    dark?: string;
  };
}
