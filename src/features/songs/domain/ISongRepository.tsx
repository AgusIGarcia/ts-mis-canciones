import { Id } from "../../../core/types/Id";
import { Song } from "./Song";

export interface ISongRepository {
  create(song: Song): Promise<Song|undefined>;
  get(id: Id): Promise<Song|undefined>;
  get(name: string, artistName: string): Promise<Song|undefined>;
  delete(song: Song): Promise<boolean>;
}
