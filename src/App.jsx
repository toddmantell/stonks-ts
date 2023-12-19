import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import MuiDashboard from "./layout/MuiDashboardLayout";
import { UserProvider } from "./data/context/UserContext";

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
