import { Document } from "mongoose";

export interface ISighting {
  user_id: string;
  username: string;
  timestamp: Date;
  content: string;
  full_url: string;
  server_id?: string;
  server_name?: string;
  channel_id?: string;
  channel_name?: string;
  message_id?: string;
  message_sequence?: number;
  message_link?: string;
  additional_urls?: string[];
}

export interface ILink {
  url: string;
  domain: string;
  path: string;
  sightings: ISighting[];
}

export interface ILinkDocument extends ILink, Document {}
