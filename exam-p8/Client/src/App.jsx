  import { Route, Routes } from "react-router-dom";
  import "./App.css";
  import MainLayout from "./layout/MainLayout";
  import Home from "./pages/Home";
  import Add from "./pages/Add";
  import Product from "./pages/Product";
  import Detail from "./pages/Detail";
  import NotFound from "./pages/NotFound";

  function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/product" element={<Product />} />
            <Route path="/Detail/:id" element={<Detail />} />
      
            <Route path="*" element={<NotFound />} />
            <Route />
          </Route>
        </Routes>
      </>
    );
  }

  export default App;
