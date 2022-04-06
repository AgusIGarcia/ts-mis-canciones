import { ILyricsAPI } from "../domain/ILyricsAPI";

export class FetchLyricsAPI implements ILyricsAPI {
  private _url = process.env.REACT_APP_LYRICS_API_URL;
  async get(artistName: string, songName: string): Promise<string> {
    let songAPI = this._url + artistName + "/" + songName,
      songRes = await fetch(songAPI),
      songJSON = await songRes.json();
    if(songJSON.lyrics === undefined){
      throw new Error("Lyrics not found");
    }
    return songJSON.lyrics;
  }
}
