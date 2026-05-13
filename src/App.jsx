import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>

        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<HomePage/>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
