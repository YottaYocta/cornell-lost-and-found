export interface ItemDataEntry {
  name: string;
  image?: string; // link for now
  description?: string;
  contact: string;
  location?: string;
  timeLost?: Date;
  timePosted: Date;
  resolved: boolean;
}

export interface MissingEntry extends ItemDataEntry {
  messages: Message[];
}

export enum SightingStatus {
  DROPPED_AT_CENTER = "dropped off at lost & found center",
  IN_POSSESSION = "currently with me",
  LEFT_AT_LOCATION = "left it where I found it",
  OTHER = "other",
}

export interface SightingEntry extends ItemDataEntry {
  status: SightingStatus;
}

export interface Message {
  timePosted: Date;
  text: string;
  image: string;
}
