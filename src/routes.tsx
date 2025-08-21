import LoginPage from "@/pages/auth/LoginPage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createRoutesFromElements, Route } from "react-router-dom";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/login" element={<LoginPage />} />
  </>
);

export default routes;
