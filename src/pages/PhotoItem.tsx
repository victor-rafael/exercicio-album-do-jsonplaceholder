import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Album } from '../types/Album';
import { Button } from '../components/Button';

export const PhotoItem = () => {
  const [photos, setPhotos] = useState<Album>();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    loadPhoto();
  }, []);

  const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos/'
  });

  const loadPhoto = async () => {
    setLoading(true);
    let response = await http.get(`${params.id}`);
    let json = await response.data;
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