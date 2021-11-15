import React, { Fragment } from "react";
import Footer from "./components/Footer";

function App() {

  const currantYear = (new Date().getFullYear());

  return (
    <Fragment>
      <h1>Hello World</h1>
      <Footer currantYear={currantYear}/>
    </Fragment>
  );
}

export default App;
