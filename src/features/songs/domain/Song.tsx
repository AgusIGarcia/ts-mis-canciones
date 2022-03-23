import { Id } from "../../../core/types/Id";
import { Artist } from "./Artist";

export interface Song {
  id: Id;
  name: string;
  artist: Artist;
  lyrics: string;
}
