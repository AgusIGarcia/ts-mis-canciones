import { inject, injectable } from "tsyringe";
import {
  ARTIST_API,
  LYRICS_API,
  MAPPER_SONGS,
} from "../../../core/dependency-injection/InjectionTokens";
import type { IArtistAPI } from "../domain/IArtistAPI";
import type { ILyricsAPI } from "../domain/ILyricsAPI";
import { Mapper } from "../dtos/Mapper";
import { SongDto } from "../dtos/SongDto";

@injectable()
export class SearchSong {
  private readonly _artistAPI: IArtistAPI;
  private readonly _lyricsAPI: ILyricsAPI;
  private readonly _mapper: Mapper;

  constructor(
    @inject(ARTIST_API) artistAPI: IArtistAPI,
    @inject(LYRICS_API) lyricsAPI: ILyricsAPI,
    @inject(MAPPER_SONGS) mapper: Mapper
  ) {
    this._artistAPI = artistAPI;
    this._lyricsAPI = lyricsAPI;
    this._mapper = mapper;
  }

  async execute(artistName: string, songName: string) {
    let artist = await this._artistAPI.get(artistName),
      lyrics = await this._lyricsAPI.get(artistName, songName),
      artistDto = this._mapper.mapArtistToArtistDto(artist),
      songDto: SongDto = {
        id: "0",
        name: songName,
        artist: artistDto,
        lyrics: lyrics,
      };
    return songDto;
  }
}
