import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/login/Home";
import Login from "pages/login/Login";
import Sign from "pages/login/Sign";
import ProjectManager from "pages/project/ProjectManager";
import Project from "pages/project/project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route index path="/" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Route>
        <Route element={<ProjectManager />}>
          {" "}
          <Route index path="/projectmanager" element={<Project />} />
        </Route>

        {/* <Route index path='/projectmanager/detail/:id' element={<ProjectDetail />} />
          <Route path='/projectmanager/createproject' element={<CreateProject />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
