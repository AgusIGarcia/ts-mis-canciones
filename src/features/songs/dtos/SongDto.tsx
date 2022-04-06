import type { Id } from "../../../core/types/Id";
import { ArtistDto } from "./ArtistDto";

export class SongDto {
  id: Id;
  name: string;
  artist: ArtistDto;
  lyrics: string;
}
