import React, { Fragment } from "react";
import OrderPage from "./pages/OrderPage";
import Footer from "./components/Footer";

function App() {

  const currantYear = (new Date().getFullYear());

  return (
    <Fragment>
      <OrderPage/>
      <Footer currantYear={currantYear}/>
    </Fragment>
  );
}

export default App;
