import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/index"
import Filmes from './pages/Filmes/index.js';
import Header from './components/Header/Header';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/filmes' element={<Filmes/>} />
        </Routes>
      </Router>
    </>
  )

}

export default App;
