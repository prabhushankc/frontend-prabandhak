import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Paper } from "@material-ui/core";
import Auth from "./Component/Admin/Auth/Auth";
const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Container
          maxWidth="xl"
          style={{
            margin: "0 auto",
            padding: "0px",
            overflow: "hidden",
          }}
        >
          <Routes>
            <Route path="/" exact element={<Auth />} />
          </Routes>
        </Container>
      </React.StrictMode>
    </BrowserRouter>
  );
};

export default App;
