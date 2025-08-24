export default function Analysis() {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-[124px] pt-[47px] px-[20px] z-10 flex justify-between items-center"
        style={{
          backgroundColor: "var(--color-bg)",
          color: "var(--color-text-title)",
        }}
      >
        <p className="text-[22px] leading-[160%] text-[var(--color-text-title)] font-bold">
          Analysis
        </p>
        <button className="w-[35px] h-[35px] flex justify-center items-center">
          <img
            src="/images/anaylsis_icon.svg"
            alt="pdf"
            className="object-contain"
          />
        </button>
      </div>
      <main className="w-full min-h-screen px-[0] pt-[124px] pb-[160px]">
        <img
          src="/images/graph.svg"
          alt="analysis-card"
          className="w-full h-auto object-contain"
        />
        <div className="w-full px-[20px]">
          <p className="text-[14px] leading-[160%] text-[var(--gray-800)] font-regular">
            From the analysis of the recent 7 site data entries...
          </p>

          <div className="flex flex-col gap-[10px] mt-[20px]">
            <div className="overflow-hidden w-full h-[66px] bg-[rgba(229, 57, 53, 0.07)] rounded-[50px]">
              <img
                src="/images/alert_01.svg"
                alt="analysis-graph"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="overflow-hidden w-full h-[66px] bg-[rgba(229, 57, 53, 0.07)] rounded-[50px]">
              <img
                src="/images/alert_02.svg"
                alt="analysis-graph"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
