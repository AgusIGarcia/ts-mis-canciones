import { ILyricsAPI } from "../domain/ILyricsAPI";

export class FetchLyricsAPI implements ILyricsAPI {
  get(artistName: string, songName: string): Promise<string | undefined> {
    throw new Error("Method not implemented.");
  }
}
