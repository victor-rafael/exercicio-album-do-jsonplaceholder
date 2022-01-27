import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Album } from '../types/Album';
import { Button } from '../components/Button';
import { api } from '../api';

export const PhotoItem = () => {
  const [photos, setPhotos] = useState<Album>();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    if(params.id)
      loadPhoto(params.id);
  }, []);

  const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos/'
  });

  const loadPhoto = async (id: string) => {
    setLoading(true);
    let json = await api.getPhoto(id);
    setLoading(false);
    setPhotos(json);
  }

  return (
    <div>

      {loading &&
        <div>Carrengando...</div>
      }

      {!loading &&
        <div>
          <Button />
          <div className="photoTitle">
            {photos?.title}
          </div>
          <img className="photoItem" src={photos?.url} />
        </div>
      }
    </div>
  );
}