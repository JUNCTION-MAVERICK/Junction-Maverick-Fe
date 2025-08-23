import { useLocation, useNavigate } from "react-router-dom";

export default function BottomMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{ width: "calc(100% - 40px)" }}
      className=" h-[85px] bg-[#171717] rounded-[100px] fixed left-[20px] bottom-[22px] "
    >
      <div className="w-full h-full flex justify-center pt-[19px] pb-[20px] ">
        <button
          onClick={() => navigate("/")}
          className="flex flex-col items-center gap-[10px]"
        >
          <img
            src={`/images/Dashboard_${
              location.pathname === "/" ? "on" : "off"
            }.svg`}
            alt="home"
          />
        </button>
        <button
          onClick={() => navigate("/daily-safety-check")}
          className="flex flex-col items-center gap-[10px]"
        >
          <img
            src={`/images/Daily_Check_${
              location.pathname === "/daily-safety-check" ? "on" : "off"
            }.svg`}
            alt="home"
          />
        </button>
        <button
          onClick={() => navigate("/analysis")}
          className="flex flex-col items-center gap-[10px]"
        >
          <img
            src={`/images/Analysis_${
              location.pathname === "/analysis" ? "on" : "off"
            }.svg`}
            alt="home"
          />
        </button>
        <button
          onClick={() => navigate("/my")}
          className="flex flex-col items-center gap-[10px]"
        >
          <img
            src={`/images/My_${location.pathname === "/my" ? "on" : "off"}.svg`}
            alt="home"
          />
        </button>
      </div>
    </div>
  );
}
