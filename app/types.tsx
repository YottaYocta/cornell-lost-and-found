export interface ItemData {
  name: string;
  image: string | undefined;
  description?: string;
  timePosted: Date;
  resolved: boolean;
}

export interface MissingItem extends ItemData {
  contact: string;
  messages: Message[];
}

export enum SightingStatus {
  DROPPED_AT_CENTER = "dropped off at lost & found center",
  IN_POSSESSION = "currently with me",
  LEFT_AT_LOCATION = "left it where I found it",
  OTHER = "other",
}

export interface ItemSighting extends ItemData {
  contact: string | undefined;
  status: SightingStatus;
}

export interface Message {
  timePosted: Date;
  text: string;
  image: string;
}

export interface MissingDataResponse {
  missingItems: MissingItem[];
}

export interface itemSightingsResponse {
  itemSightings: ItemSighting[];
}
