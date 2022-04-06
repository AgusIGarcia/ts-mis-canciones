import { injectable } from "tsyringe";
import { Id } from "../../../core/types/Id";
import { Artist } from "../domain/Artist";
import { ISongRepository } from "../domain/ISongRepository";
import { Song } from "../domain/Song";

@injectable()
export class SqlServerSongRepository implements ISongRepository {
  getByArtistNameAndSongName(artistName: string, songName: string): Promise<Song> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Song[]> {
    throw new Error("Method not implemented.");
  }
  create(song: Song): Promise<Song> {
    throw new Error("Method not implemented.");
  }
  async getById(id: Id): Promise<Song> {
    let artist: Artist = {
      id: "1",
      name: "Cristian Castro",
      img: "/img",
    };
    let song: Song = {
      id: "1",
      name: "Azul",
      artist: artist,
      lyrics: "ALALALALSLASLALS",
    };
    return song;
  }
  delete(id: Id): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
