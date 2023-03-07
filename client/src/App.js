import { Routes, Route } from "react-router-dom";

import HomeView from "./components/HomeView";
import CompaniesView from "./components/CompaniesView";
import CompanyView from "./components/CompanyView";
import LogInView from "./components/LogInView";

import Header from "./components/Header";

import "./App.scss";
import RegistrationView from "./components/RegistrationView";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LogInView />}></Route>
        <Route path="/register" element={<RegistrationView />}></Route>

        <Route path="/companies" element={<CompaniesView />}>
          <Route path=":id" element={<CompanyView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
