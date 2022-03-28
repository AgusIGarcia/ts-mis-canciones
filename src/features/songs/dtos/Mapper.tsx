import { Artist } from "../domain/Artist";
import { Song } from "../domain/Song";
import { SongDto } from "./SongDto";
import { ArtistDto } from "./ArtistDto";

export class Mapper {
  public mapSongToSongDto(song: Song) {
    let artistDto: ArtistDto = this.mapArtistToArtistDto(song.artist);
    let songDto: SongDto = {
      ...song,
      artist: artistDto,
    };
    return songDto;
  }

  public mapArtistToArtistDto(artist: Artist) {
    let artistDto: ArtistDto = {
      ...artist,
    };
    return artistDto;
  }

  public mapSongDtoToSong(songDto: SongDto) {
    let artist: Artist = this.mapArtistDtoToArtist(songDto.artist);
    let song: Song = {
      ...songDto,
      artist: artist,
    };
    return song;
  }

  public mapArtistDtoToArtist(artistDto: ArtistDto) {
    let artist: Artist = {
      ...artistDto,
    };
    return artist;
  }
}
