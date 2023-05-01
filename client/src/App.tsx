import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeView from "./components/HomeView";
import CompaniesView from "./components/CompaniesView";
import CompanyView from "./components/CompanyView";
import LogInForm from "./components/LogInForm";

import Header from "./components/Header";
import "./App.scss";
import RegistrationForm from "./components/RegistrationForm";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LogInForm />}></Route>
        <Route path="/register" element={<RegistrationForm />}></Route>

        <Route path="/companies" element={<CompaniesView />}>
          <Route path=":id" element={<CompanyView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
