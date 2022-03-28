import { injectable } from "tsyringe";
import { Id } from "../../../core/types/Id";
import { ISongRepository } from "../domain/ISongRepository";
import { Song } from "../domain/Song";

@injectable()
export class LocalStorageSongRepository implements ISongRepository {
  getAll(): Promise<Song[]> {
    throw new Error("Method not implemented.");
  }
  create(song: Song): Promise<Song> {
    throw new Error("Method not implemented.");
  }
  getById(id: Id): Promise<Song> {
    throw new Error("Method not implemented.");
  }
  delete(id: Id): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
