import { inject, injectable } from "tsyringe";
import {
  MAPPER_SONGS,
  SONG_REPOSITORY,
} from "../../../core/dependency-injection/InjectionTokens";
import { Id } from "../../../core/types/Id";
import type { ISongRepository } from "../domain/ISongRepository";
import { Mapper } from "../dtos/Mapper";

@injectable()
export class ViewSong {
  private readonly _songRepository: ISongRepository;
  private readonly _mapper: Mapper;

  constructor(
    @inject(SONG_REPOSITORY) songRepository: ISongRepository,
    @inject(MAPPER_SONGS) mapper: Mapper
  ) {
    this._songRepository = songRepository;
    this._mapper = mapper;
  }

  public async execute(id: Id) {
    let song = await this._songRepository.getById(id);
    return song !== undefined ? this._mapper.mapSongToSongDto(song) : undefined;
  }
}
