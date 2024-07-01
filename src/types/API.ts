export interface Talent {
  name: string;
  iconImageUrl: string;
}

export interface APIResponse {
  displayDate: string;
  datetime: string;
  isLive: boolean;
  platformType: number;
  url: string;
  thumbnail: string;
  title: string;
  name: string;
  talent: Talent;
  collaboTalents: Talent[];
}
