import { Artist } from "../domain/Artist";
import { IArtistAPI } from "../domain/IArtistAPI";

export class FetchArtistAPI implements IArtistAPI {
  private url = process.env.REACT_APP_ARTIST_API_URL;
  get(artistName: string): Promise<Artist> {
    throw new Error("Method not implemented.");
  }
}
