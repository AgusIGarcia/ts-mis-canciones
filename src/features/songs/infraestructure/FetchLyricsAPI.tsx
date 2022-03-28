import { ILyricsAPI } from "../domain/ILyricsAPI";

export class FetchLyricsAPI implements ILyricsAPI {
  get(artistName: string, songName: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
