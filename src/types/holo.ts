export interface Branch {
  apiUrl: string;
  name: string;
}

export interface Talent {
  apiName: string;
  nickname: string;
  //TODO remove optional when done
  name?: string;
  twitterAccount?: string;
  youtubeChannel?: string;
  agency?: string;
  generation?: string;
  generationId?: number;
  active: boolean;
  colors?: {
    light?: string;
    dark?: string;
  };
}
