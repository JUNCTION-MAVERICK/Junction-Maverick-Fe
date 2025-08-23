import { useNavigate } from "react-router-dom";

export default function DailySafetyCheck() {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-full min-h-screen px-[20px] pt-[68px] pb-[160px]">
        <p className="absolute top-[68px] text-[26px] leading-[160%] text-[var(--color-text)] font-extrabold">
          Daily Safety Check
        </p>
        <div className="absolute top-0 left-0 w-full min-h-screen h-full flex justify-center items-center ">
          <div>
            <p className="pb-[26px] text-[18px] leading-[160%] font-regular text-[var(--gray-800)]">
              Safety checklist not submitted yet.
            </p>
            <div className="flex flex-col gap-2">
              <button
                className="w-full h-[74px] bg-[var(--color-primary)] rounded-[20px] text-[20px] leading-[160%] font-bold text-[var(--color-text-)]"
                onClick={() => {
                  navigate("/site-info-register");
                }}
              >
                Start AI Safety Check
              </button>
              <button
                className="w-full h-[74px] bg-[#D4DBE5] rounded-[20px] text-[20px] leading-[160%] font-bold text-[var(--gray-700)]"
                onClick={() => {}}
              >
                Load Previous Checklist
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
