import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import MuiDashboard from "./pages/MuiDashboardLayout";
import IRR from "./pages/IRR";
import StonkDetails from "./pages/StonkDetails";
import Header from "./components/Header";
import UserContext, { UserProvider } from "./data/context/UserContext";
import Dashboard from "./pages/MuiDashboardLayout";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ErrorBoundary>
          {/* <div className="App">
            <Header /> */}
            <MuiDashboard>
            
            </MuiDashboard>
          {/* </div> */}
        </ErrorBoundary>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
