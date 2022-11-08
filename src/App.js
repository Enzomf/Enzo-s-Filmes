import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import MainLayout from "./layouts/Main";
import SecondaryLayout from "./layouts/Secondary";
import Loader from "./components/Loader/loader"
import Search from "./pages/Search/Search";
const Home = lazy(() => import("./pages/Home/index"));
const Series = lazy(() => import("./pages/Series/index"));
const Filmes = lazy(() => import("./pages/Filmes/index.js"));
const Detalhes = lazy(() => import("./pages/detalhes/index"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router basename="Enzo-s-Filmes">
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="home" index element={<Home />} />
              <Route path="filmes" element={<Filmes />} />
              <Route path="series" element={<Series />} />
              <Route path="search" element={<Search/>}/>
            </Route>
            <Route element={<SecondaryLayout/>}>
              <Route path="detalhes/:id" element={<Detalhes />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
