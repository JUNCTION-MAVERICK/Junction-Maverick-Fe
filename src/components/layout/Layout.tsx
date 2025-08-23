import BottomMenu from "@/components/BottomMenu/BottomMenu";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="w-full h-screen bg-[var(--color-bg)] relative">
      <Outlet />
      {["/", "/daily-safety-check", "/analysis", "/my"].includes(
        location.pathname
      ) ? (
        <BottomMenu />
      ) : null}
    </div>
  );
}
