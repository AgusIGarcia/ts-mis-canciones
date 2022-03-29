import { inject, injectable } from "tsyringe";
import {
  MAPPER_SONGS,
  SONG_REPOSITORY,
} from "../../../core/dependency-injection/InjectionTokens";
import type { ISongRepository } from "../domain/ISongRepository";
import { Mapper } from "../dtos/Mapper";
import { SongDto } from "../dtos/SongDto";

@injectable()
export class SaveSong {
  private readonly _songRepository: ISongRepository;
  private readonly _mapper: Mapper;

  constructor(
    @inject(SONG_REPOSITORY) songRepository: ISongRepository,
    @inject(MAPPER_SONGS) mapper: Mapper
  ) {
    this._songRepository = songRepository;
    this._mapper = mapper;
  }

  async execute(songDto: SongDto) {
    let savedSong = await this._songRepository.create(this._mapper.mapSongDtoToSong(songDto));
    return this._mapper.mapSongToSongDto(savedSong);
  }

}
