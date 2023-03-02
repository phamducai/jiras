import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "pages/login/Home";
import Login from "pages/login/Login";
import Sign from "pages/login/Sign";
import ProjectManager from "pages/project/ProjectManager";
import Project from "pages/project/Project";
import CreateProject from "pages/project/CreateProject";

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
          <Route
            path="/projectmanager/createproject"
            element={<CreateProject />}
          />
        </Route>

        {/* <Route index path='/projectmanager/detail/:id' element={<ProjectDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
