import React from "react";
import { createRoot } from "react-dom/client";
import Page from "./page.jsx";

const root = createRoot(document.getElementById("root"))

root.render(
    <Page />
);