import Layout from "@/components/layout/Layout";
import Analysis from "@/pages/analysis/Analysis";
import LoginPage from "@/pages/auth/LoginPage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import DailySafetyCheck from "@/pages/safety-check/DailySafetyCheck";
import DailySafetyCheckFinish from "@/pages/safety-check/DailySafetyCheckFininsh";
import DailySafetyCheckList from "@/pages/safety-check/DailySafetyCheckLIst";
import SearchSite from "@/pages/safety-check/SearchSite";
import SiteInfoRegister from "@/pages/safety-check/SiteInfoRegister";
import { createRoutesFromElements, Route } from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/daily-safety-check" element={<DailySafetyCheck />} />
    <Route path="/site-info-register" element={<SiteInfoRegister />} />
    <Route path="/daily-safety-check-list" element={<DailySafetyCheckList />} />
    <Route
      path="/daily-safety-check-finish"
      element={<DailySafetyCheckFinish />}
    />
    <Route path="/analysis" element={<Analysis />} />
    <Route path="/site-info-register/search-site" element={<SearchSite />} />

    <Route path="*" element={<NotFound />} />
  </Route>
);

export default routes;
