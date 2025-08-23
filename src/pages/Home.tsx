import BottomMenu from "@/components/BottomMenu/BottomMenu";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen relative p-[20px] flex flex-col gap-2">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Maverick</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate("/login")}>로그인</button>
        </div>
      </header>
      <main>
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            onClick={() => {
              navigate("/daily-safety-check");
            }}
          >
            Start AI Safety Check
          </button>
        </div>
      </main>
      <BottomMenu />
    </div>
  );
}
