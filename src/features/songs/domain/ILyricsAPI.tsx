export interface ILyricsAPI {
  get(artistName: string, songName: string): Promise<string | undefined>;
}
