import { useState } from "react";

import Header from "../../components/Header/Header";
import OrderForm from "../../components/OrderForm/OrderForm";

import './OrderPage.css'
import menuData from "../../assets/fakeData";

export default function OrderPage() {
  // Ürün seçimi için props belirledim. İterasyon 2 için Anasayfadan gelen ürün bilgisi 
  // Burada ilgili props 'a aktarılmalı. 
  const [product] = useState(menuData[0]);

  return (
    <>
 <main className="Order-Main-Wrapper">
        <Header />
        <OrderForm 
        product={product}

        />
        </main>
    </>
  );
}
