import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, AllMusicPage, AllGenrePage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/music' element={<AllMusicPage />} />
          <Route path='/genre' element={<AllGenrePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
