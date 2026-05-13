import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import NewsInsightsSection from "./components/NewsInsightsSection/NewsInsightsSection";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>

        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<NewsInsightsSection/>} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
