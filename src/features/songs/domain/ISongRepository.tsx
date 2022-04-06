import { Id } from "../../../core/types/Id";
import { Song } from "./Song";

export interface ISongRepository {
  getAll(): Promise<Song[]>;
  create(song: Song): Promise<Song>;
  getById(id: Id): Promise<Song>;
  getByArtistNameAndSongName(
    artistName: string,
    songName: string
  ): Promise<Song>;
  delete(id: Id): Promise<boolean>;
}
