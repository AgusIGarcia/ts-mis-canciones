import { inject, injectable } from "tsyringe";
import { SONG_REPOSITORY } from "../../../core/dependency-injection/InjectionTokens";
import { Id } from "../../../core/types/Id";
import type { ISongRepository } from "../domain/ISongRepository";

@injectable()
export class DeleteSong{
    private readonly _songRepository : ISongRepository;

    constructor(@inject(SONG_REPOSITORY) songRepository : ISongRepository){
        this._songRepository = songRepository;
    }

    public execute(id:Id){
        this._songRepository.delete(id);
    }
}