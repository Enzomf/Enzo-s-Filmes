import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";


import Header from "./components/Header/Header";


import NavBar from "./components/NavBar/Navbar";
import MainCarrousel from "./components/Main Carrousel/MainCarrousel";
const Home = lazy(() => import("./pages/Home/index"));
const Series = lazy(() => import("./pages/Series/index"));
const Filmes = lazy(() => import("./pages/Filmes/index.js"));
const Detalhes = lazy(() => import("./pages/detalhes/index"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="Enzo-s-Filmes">
        <Header />
        <MainCarrousel />
        <div className="navBarC">

        <NavBar/>
        </div>

        <Suspense fallback={<h1>Loafing</h1>}>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} replace />} />
            <Route path="home" element={<Home />} />
            <Route path="filmes" element={<Filmes />} />
            <Route path="series" element={<Series />} />
            <Route path="detalhes/:id" element={<Detalhes />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
