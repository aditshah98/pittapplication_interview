import Navbar from "./components/navbar/Navbar";
// import Impapps from "./components/impapps/Impapps";
// import CategoryType from "./components/appCategoriesTypes/CategoryType";
import Mainbody from "./components/main/Mainbody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppDetails from "./components/appdetails/AppDetails";
import CatBasedApps from "./components/appCategoriesTypes/CatBasedApps";
function App() {
  return (
    <>
      <Navbar />

      {/* below was put inside impapps */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainbody />} />
          <Route path="/appdetails/:slug" element={<AppDetails />} />
          <Route path="/category/:id" element={<CatBasedApps />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
