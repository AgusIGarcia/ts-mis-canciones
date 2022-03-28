import { container } from "tsyringe";
import { Mapper } from "../../features/songs/dtos/Mapper";
import { FetchArtistAPI } from "../../features/songs/infraestructure/FetchArtistAPI";
import { FetchLyricsAPI } from "../../features/songs/infraestructure/FetchLyricsAPI";
import { SqlServerSongRepository } from "../../features/songs/infraestructure/SqlServerSongRepository";
import {
  ARTIST_API,
  LYRICS_API,
  MAPPER_SONGS,
  SONG_REPOSITORY,
} from "./InjectionTokens";

container.register(SONG_REPOSITORY, SqlServerSongRepository);
container.register(ARTIST_API, FetchArtistAPI);
container.register(LYRICS_API, FetchLyricsAPI);
container.register(MAPPER_SONGS, Mapper);

export { container as MyContainer };
