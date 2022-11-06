import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query"
import Home from "./pages/Home/index"
import Filmes from './pages/Filmes/index.js';
import Header from './components/Header/Header';
import Series from './pages/Series/index'
import Detalhes from "./pages/detalhes/index"
import MainCarrousel from './components/Main Carrousel/MainCarrousel';



const queryClient = new QueryClient();


function App() {

  const path = window.location.pathname

  return (
    <QueryClientProvider client={queryClient}>

      <Router basename='Enzo-s-Filmes'>
        <Header />
        {<MainCarrousel />}
        <Routes>
          <Route path='/' element={<Navigate to={"/home"} replace />} />
          <Route path='home' element={<Home />} />
          <Route path='filmes' element={<Filmes />} />
          <Route path='series' element={<Series />} />
          <Route path='detalhes/:id' element={<Detalhes />} />
          <Route path='*' element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )

}

export default App;
