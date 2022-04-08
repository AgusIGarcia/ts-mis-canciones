import { useTranslation } from "react-i18next";
import YesNoDialogMui from "../../../core/delivery/mui-components/YesNoDialogMui";
import { MyContainer } from "../../../core/dependency-injection/Container";
import { DeleteSong } from "../application/DeleteSong";
import { SongDto } from "../dtos/SongDto";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  song: SongDto;
}

const DeleteSongComponent = (props: Props) => {
  let deleteSong = MyContainer.resolve(DeleteSong);
  
  const handleYes = async () => {
    await deleteSong.execute(props.song.id);
    props.setOpen(false);
    window.location.reload();
  };

  const handleNo = () => {
    props.setOpen(false);
  };

  const { t } = useTranslation(["global", "songs"]);
  const songData = props.song.artist.name + " - " + props.song.name;
  return (
    <YesNoDialogMui
      open={props.open}
      yes={handleYes}
      no={handleNo}
      yesText={t("global:yes")}
      noText={t("global:no")}
      title={t("global:delete")}
      message={t("songs:songDeleteText0") + " " + songData + "?"}
    />
  );
};

export default DeleteSongComponent;
