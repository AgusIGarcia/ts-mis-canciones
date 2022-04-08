import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import AlertMui from "../../../core/delivery/mui-components/AlertMui";
import IconButtonMui from "../../../core/delivery/mui-components/IconButtonMui";
import ListItemWithAvatarMui from "../../../core/delivery/mui-components/ListItemWithAvatarMui";
import ListMui from "../../../core/delivery/mui-components/ListMui";
import { MyContainer } from "../../../core/dependency-injection/Container";
import { Id } from "../../../core/types/Id";
import { ListSongs } from "../application/ListSongs";
import { SongDto } from "../dtos/SongDto";
import styles from "./ListMySongs.module.css";

interface Props{
  setSongToDelete:React.Dispatch<React.SetStateAction<SongDto>>;
  setThereIsSongToDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListMySongs = (props:Props) => {
  let listSongsCU = MyContainer.resolve(ListSongs);
  let navigate = useNavigate();
  const [songs, setSongs] = useState<SongDto[]>([]);
  const { t } = useTranslation(["songs"]);

  const getSongs = async () => {
    setSongs(await listSongsCU.execute());
  };

  useEffect(() => {
    getSongs();
  }, []);

  const handleOpenSong = (songId:Id) => {
    navigate(`/songs/${songId}`);
  }

  const handleDeleteSong = (song:SongDto) => {
    props.setSongToDelete(song);
    props.setThereIsSongToDelete(true);
  }

  const createItems = () => {
    let listItems: JSX.Element[] = [];
    songs.forEach((s, index) => {
      listItems.push(
        <ListItemWithAvatarMui
          key={s.id}
          img={s.artist.img}
          primaryText={s.name}
          secondaryText={s.artist.name}
          className={styles.Item}
          textClassName={styles.Text}
          imgClassName={styles.Image}
        >
            <IconButtonMui icon="launch" iconClassName={styles.Icon} onClick={() => handleOpenSong(s.id)}/>
            <div id="Separator"></div>
            <IconButtonMui icon="delete" iconClassName={styles.Icon} onClick={() => handleDeleteSong(s)}/>
        </ListItemWithAvatarMui>
      );
    });
    return listItems;
  };

  const content = () => {
    if (songs.length === 0) {
      return (
        <AlertMui
          className={styles.Alert}
          titleClassName={styles.AlertTitle}
          severity="error"
          title={t("songs:noSongsMessage")}
        />
      );
    } else {
      return <ListMui>{createItems()}</ListMui>;
    }
  };
  return <div className={styles.PrincipalDiv}>{content()}</div>;
};

export default ListMySongs;
