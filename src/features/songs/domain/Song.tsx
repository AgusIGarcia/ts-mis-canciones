import type { Id } from "../../../core/types/Id";
import { Artist } from "./Artist";

export class Song {
  id: Id;
  name: string;
  artist: Artist;
  lyrics: string;
}
