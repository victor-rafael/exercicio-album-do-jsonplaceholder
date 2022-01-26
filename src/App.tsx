import { Routes, Route} from 'react-router-dom';
import './App.css';
import { AlbumItem } from './pages/AlbumItem';
import { Home } from './pages/Home';
import { PhotoItem } from './pages/PhotoItem';


function App() {

  return (
    <div className="App">
      <h1>Galeria de fotos</h1>
      <hr />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:slug" element={<AlbumItem />} />
        <Route path="/photo/:id" element={<PhotoItem />} />
      </Routes>
    </div>
  )
}

export default App;

