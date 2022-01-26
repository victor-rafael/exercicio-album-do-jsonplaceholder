import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Post } from '../types/Post';
import { Album } from '../types/Album';
import { Button } from '../components/Button';
import axios from 'axios';

export const AlbumItem = () => {
  const params = useParams();

  const [atributies, setAtributies] = useState<Post>();
  const [albuns, setAlbuns] = useState<Album[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAlbumTitle();
    loadAlbuns();
  }, []);

  const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums/'
  });


  const loadAlbumTitle = async () => {
    let response = await http.get(`${params.slug}`);
    let json = await response.data;
    setAtributies(json);
  }

  const loadAlbuns = async () => {
    setLoading(true);
    let response = await http.get(`${params.slug}/photos`);
    let json = await response.data;
    setLoading(false);
    setAlbuns(json);
  }



  return (
    <div>
      {loading &&
        <div>Carregando...</div>
      }

      {!loading &&
        <div>
          <Button />
          <h1>{atributies?.title}</h1>

          <div className="estrut" >
            {albuns.map((album, index) => (
              <Link to={`/photo/${album.id}`} key={index}>
                <div className="tumb"  >
                  <img src={album.thumbnailUrl} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      }
    </div>
  );
}