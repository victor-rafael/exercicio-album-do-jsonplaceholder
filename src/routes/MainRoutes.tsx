import{ useRoutes } from 'react-router-dom';

import { AlbumItem } from '../pages/AlbumItem';
import { Home } from '../pages/Home';
import { PhotoItem } from '../pages/PhotoItem';

export const MainRoutes = () => {
  return useRoutes ([
    { path: "/", element: <Home />},
    { path: "/album/:id", element: <AlbumItem />},
    { path: "/photo/:id", element: <PhotoItem />}
  ]);
}