import { Artist } from "../domain/Artist";
import { IArtistAPI } from "../domain/IArtistAPI";

export class FetchArtistAPI implements IArtistAPI {
  get(artistName: string): Promise<Artist | undefined> {
    throw new Error("Method not implemented.");
  }
}
