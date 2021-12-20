import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Logon/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}