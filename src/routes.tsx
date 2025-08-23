import LoginPage from "@/pages/auth/LoginPage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createRoutesFromElements, Route } from "react-router-dom";

const routes = createRoutesFromElements(
  <>
    <Route index path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />

    <Route path="*" element={<NotFound />} />
  </>
);

export default routes;
