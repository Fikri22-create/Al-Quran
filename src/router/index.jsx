import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import App from "../App";
import SuratPage from "../pages/SuratPage";

export const router = createBrowserRouter([
  { path: "/",element: <App />},
  {  path: "/surat",
    element: <Layout />,
    children: [
      { path: ":nomor", element: <SuratPage /> },
    ],
  },
]);