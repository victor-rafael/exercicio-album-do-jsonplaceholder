import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Post } from '../types/Post';
import { Album } from '../types/Album';
import { Button } from '../components/Button';
import axios from 'axios';
import { api } from '../api';
import { AlbumPhoto } from '../components/Album';

export const AlbumItem = () => {
  const params = useParams();

  const [atributies, setAtributies] = useState<Post>({id:0, title:'', userId:0});
  const [albuns, setAlbuns] = useState<Album[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(params.id) {
      loadAlbumTitle(params.id);
      loadAlbuns(params.id);
    }
  }, []);

  const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums/'
  });


  const loadAlbumTitle = async (id: string) => {
    let json = await api.getAlbum(id);
    setAtributies(json);
  }

  const loadAlbuns = async (id: string) => {
    setLoading(true);
    let json = await api.getPhotosFromAlbum(id);
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
              <AlbumPhoto key={index} data={album} />
            ))}
          </div>
        </div>
      }
    </div>
  );
}