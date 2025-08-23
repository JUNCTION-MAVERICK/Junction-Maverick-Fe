import { useNavigate } from "react-router-dom";

export default function BottomMenu() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[96px] bg-[#fff] absolute left-0 bottom-0 pb-[42px]">
      <div className="w-full h-full flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center"
        >
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => navigate("/daily-safety-check")}
          className="flex flex-col items-center"
        >
          <span>Daily Check</span>
        </button>
        <button
          onClick={() => navigate("/analysis")}
          className="flex flex-col items-center"
        >
          <span>Analysis</span>
        </button>
        <button
          onClick={() => navigate("/my")}
          className="flex flex-col items-center"
        >
          <span>MY</span>
        </button>
      </div>
    </div>
  );
}
