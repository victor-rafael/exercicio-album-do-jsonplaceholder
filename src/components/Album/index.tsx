import { Link } from 'react-router-dom';
import { Album } from '../../types/Album';
import './styles.css';

type Props = {
  data: Album;
}

export const AlbumPhoto = ({data}: Props) => {
  return (
    <Link to={`/photo/${data.id}`} >
      <div className="tumb"  >
        <img src={data.thumbnailUrl} />
      </div>
    </Link>
  );
}