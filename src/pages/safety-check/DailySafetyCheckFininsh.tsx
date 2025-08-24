import HeaderBasicLight from "@/components/Header/HeaderBasicLight";

export default function DailySafetyCheckFinish() {
  return (
    <>
      <HeaderBasicLight title="Daily Safety Check" />
      <main className="w-full min-h-screen px-[0] pt-[124px] pb-[160px]">
        <img
          src="/images/result_card.svg"
          alt="daily-safety-check-finish"
          className="w-full h-auto object-contain"
        />
        <div className="w-full px-[20px]">
          <img
            src="/images/result_list01.svg"
            alt="daily-safety-check-finish"
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
    </>
  );
}
