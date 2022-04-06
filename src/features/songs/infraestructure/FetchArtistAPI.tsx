import { Artist } from "../domain/Artist";
import { IArtistAPI } from "../domain/IArtistAPI";

export class FetchArtistAPI implements IArtistAPI {
  private _url = process.env.REACT_APP_ARTIST_API_URL;
  async get(artistName: string): Promise<Artist> {
    try {
      let artistAPI = this._url + artistName,
        artistRes = await fetch(artistAPI),
        artistJSON = await artistRes.json(),
        artist: Artist = {
          name: artistJSON.artists[0].strArtist,
          img: artistJSON.artists[0].strArtistThumb,
        };
      return artist;
    } catch (error) {
      throw new Error("Artist not found");
    }
  }
}
