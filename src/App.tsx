import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/login/Home";
import Login from "pages/login/Login";
import Sign from "pages/login/Sign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route index path="/" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
