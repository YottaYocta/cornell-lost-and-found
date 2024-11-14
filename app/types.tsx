export type ItemDataEntry = {
  image: string; // link for now
  description: string;
  contact: string;
  location: string;
  timeLost: Date;
  timePosted: Date;
  resolved: boolean;
};

export type MissingEntry = ItemDataEntry & {
  messages: Message[];
};

export enum SightingStatus {
  DROPPED_AT_CENTER,
  IN_POSSESSION,
  OTHER,
}

export type SightingEntry = ItemDataEntry & {
  status: SightingStatus;
};

export type Message = {
  timePosted: Date;
  text: string;
  image: string;
};
