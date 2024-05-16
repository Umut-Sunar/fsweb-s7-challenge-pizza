import { useNavigate } from "react-router-dom";

import "./MainPage.css";

function MainPage() {
  const navigation = useNavigate();

  function routeToOrder() {
    navigation("/Siparis-Olustur");
  }

  return (
    <>
      <div className="Hero-Section">
           
        <img
          src="../../../Assets/mile1-assets/home-banner.png"
          alt="BackgroundPizza"
          className="Hero-Section-Background"
        />
         <header className="Hero-Section-Header">
        <h1 className="Hero-Section-BrandName">Teknolojik Yemekler</h1>
        <h2 className="Hero-Section-Slogan">KOD ACIKTIRIR<br/> PİZZA,DOYURUR</h2>
        </header>
        <button onClick={routeToOrder} className="RouteOrderBtn ">
          ACIKTIM
        </button>
      </div>
    </>
  );
}

export default MainPage;
