import Movie from './components/Movie';
import { dummy } from './movieDummy';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elemet={<Home></Home>} />
        <Route path="/movie" elemet={<Movies />} />
        <Route path="/tv" elemet={<Tv />} />
        <Route path="/person" elemet={<Celebrity />} />
        <Route path="/*" elemet={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
