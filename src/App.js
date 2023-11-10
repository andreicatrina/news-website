import logo from "./logo.svg";
import "./App.css";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
