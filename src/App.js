import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AllMusicPage, AllGenrePage, ErrorPage, NotFoundPage } from './pages';
import { MusicRecordProvider } from './contexts/MusicRecordContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/music' element={<MusicRecordProvider><AllMusicPage /></MusicRecordProvider>} />
          <Route path='/genre' element={<MusicRecordProvider><AllGenrePage /></MusicRecordProvider>} />
          <Route path='/error/:errorCode' element={<ErrorPage />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
