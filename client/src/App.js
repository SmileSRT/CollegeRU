import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";


const App = () => {
  return(
    <BrowserRouter>
      <AppRouter />

      <div>client version hi</div>
    </BrowserRouter>
  )
}

export default App;
