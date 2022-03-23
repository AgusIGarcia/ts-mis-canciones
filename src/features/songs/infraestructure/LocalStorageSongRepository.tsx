import { ISongRepository } from "../domain/ISongRepository";
import { Song } from "../domain/Song";

export class LocalStorageSongRepository implements ISongRepository {
  create(song: Song): Promise<Song | undefined> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<Song | undefined>;
  get(name: string, artistName: string): Promise<Song | undefined>;
  get(name: unknown, artistName?: unknown): Promise<Song | undefined> {
    throw new Error("Method not implemented.");
  }
  delete(song: Song): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
