import { Routes, Route,Navigate} from "react-router-dom";
import "./App.css";

import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


function App() {



  return (
    <>
      {/* Burada 3 tane sayfa ve routingler olacak */}

      <Routes>

        <Route path="/" element={<Navigate replace to="/Anasayfa" /> } />
        <Route path="/Anasayfa" element={<MainPage />} />
        <Route path="/Siparis-Olustur" element={<OrderPage  />} />
        <Route path="/Success" element={<SuccessPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
