import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import OrderPage from "../pages/orderPage/OrderPage";

export default () => (
  <BrowserRouter>
    <Routes>
      {/* El atributo exact significa que ese nodo no afecta a sus descendientes. 
      Si no lo ponemos al escirbir /login, accederiamos igualmente al Home*/}
      <Route path="/" element={<Home />} />
      <Route path="/Pedido" element={<OrderPage />} />
      {/* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
      <Route path="*" element={() => <div>404</div>} />
    </Routes>
  </BrowserRouter>
);
