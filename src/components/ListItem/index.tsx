import { Link } from 'react-router-dom';
import'./styles.css';

type Props = {
  id: number;
  title: string;
}

export const ListItem = ({id, title}: Props) => {
  return (
    <Link to={`/album/${id}`}>
      <div className="postItem">
        {title}
      </div>
    </Link>
  );
}