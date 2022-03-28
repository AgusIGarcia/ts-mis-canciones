import { Artist } from "./Artist";

export interface IArtistAPI {
  get(artistName: string): Promise<Artist>;
}
