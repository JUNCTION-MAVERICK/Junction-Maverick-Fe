import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-screen bg-[var(--color-bg)] relative">
      <Outlet />
    </div>
  );
}
