import { Schema, model } from "mongoose";
import { ILinkDocument, ISighting } from "./link.interfaces";

const SightingSchema = new Schema<ISighting>({
  user_id: { type: String, required: true },
  username: { type: String, required: true },
  timestamp: { type: Date, required: true },
  content: { type: String, required: true },
  full_url: { type: String, required: true },
  server_id: { type: String, default: null },
  server_name: { type: String, default: null },
  channel_id: { type: String, default: null },
  channel_name: { type: String, default: null },
  message_id: { type: String, default: null },
  message_sequence: { type: Number, default: null },
  message_link: { type: String, default: null },
  additional_urls: [{ type: String, default: [] }],
});

const LinkSchema = new Schema<ILinkDocument>({
  url: String,
  domain: String,
  path: String,
  sightings: [SightingSchema],
});

const Link = model<ILinkDocument>("Link", LinkSchema);

export default Link;
