import { json } from "node:stream/consumers";
import { injectable } from "tsyringe";
import { Id } from "../../../core/types/Id";
import { ISongRepository } from "../domain/ISongRepository";
import { Song } from "../domain/Song";

@injectable()
export class LocalStorageSongRepository implements ISongRepository {
  private _localStorageKey: string =
    process.env.REACT_APP_LOCAL_STORAGE_KEY || "MySongsDefault";

  async getAll(): Promise<Song[]> {
    let localStorageContent: string =
      localStorage.getItem(this._localStorageKey) || "[]";
    let mySongs: Song[] = await JSON.parse(localStorageContent);
    return mySongs;
  }

  async create(song: Song): Promise<Song> {
    let songsList = await this.getAll(),
      id = await this.autoGenerateId();
    song.id = id;
    songsList.push(song);
    localStorage.setItem(this._localStorageKey, JSON.stringify(songsList));
    return song;
  }

  async getById(id: Id): Promise<Song> {
    let songsList = await this.getAll(),
      filteredSongs = songsList.filter((s) => s.id === id);
    return filteredSongs[0];
  }

  async delete(id: Id): Promise<boolean> {
    let songsList = await this.getAll(),
      newList:Song[] = [],
      deletedSong = false;
    songsList.forEach((s) => {
      if (s.id != id) newList.push(s);
      else deletedSong = true;
    });
    localStorage.setItem(this._localStorageKey, JSON.stringify(newList));
    return deletedSong;
  }

  private async autoGenerateId(): Promise<Id> {
    let songsList = await this.getAll();
    return songsList.length === 0
      ? "1"
      : String(Number(songsList[songsList.length - 1].id || 0) + 1);
  }
}
