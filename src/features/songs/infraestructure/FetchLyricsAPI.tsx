import { ILyricsAPI } from "../domain/ILyricsAPI";

export class FetchLyricsAPI implements ILyricsAPI {
  private _url = process.env.REACT_APP_LYRICS_API_URL;
  async get(artistName: string, songName: string): Promise<string> {
    // let songAPI = this._url + "artist="+ artistName + "&song=" + songName,
    //   songRes = await fetch(songAPI, options),
    //   songJSON = await songRes.json();
    // if(songJSON.lyrics === undefined){
    //   throw new Error("Lyrics not found");
    // }
    return "Se rompió la API";
  }
}
