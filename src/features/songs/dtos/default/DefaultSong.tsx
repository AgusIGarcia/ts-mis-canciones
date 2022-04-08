import { ArtistDto } from "../ArtistDto";
import { SongDto } from "../SongDto";

const defaultArtist: ArtistDto = {
    name: "",
    img: "",
  };
  
export const defaultSong: SongDto = {
    id:"0",
    name: "",
    artist: defaultArtist,
    lyrics: "",
  };