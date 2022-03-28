import { inject, injectable } from "tsyringe";
import {
  MAPPER_SONGS,
  SONG_REPOSITORY,
} from "../../../core/dependency-injection/InjectionTokens";
import type { ISongRepository } from "../domain/ISongRepository";
import { Mapper } from "../dtos/Mapper";
import { SongDto } from "../dtos/SongDto";

@injectable()
export class ListSongs {
  private readonly _songRepository: ISongRepository;
  private readonly _mapper: Mapper;

  constructor(
    @inject(SONG_REPOSITORY) songRepository: ISongRepository,
    @inject(MAPPER_SONGS) mapper: Mapper
  ) {
    this._songRepository = songRepository;
    this._mapper = mapper;
  }

  public async execute() {
    let resultList = await this._songRepository.getAll(),
      resultListDto: SongDto[] = [];
    resultList.forEach((song) => {
      resultListDto.push(this._mapper.mapSongToSongDto(song));
    });
    return resultListDto;
  }
}
