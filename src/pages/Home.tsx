import { useNavigate } from "react-router-dom";
import dayjs from "@/global/utils/dayjs";
import { useState } from "react";
import BottomMenu from "@/components/BottomMenu/BottomMenu";

/**
 *
 * @returns 홈, 대시보드
 */
export default function Home() {
  const [isRegister] = useState<boolean>(true);

  return (
    <div className="w-full px-[20px] pt-[77px] pb-[160px] overflow-x-hidden">
      <main className="w-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[18px] leading-[160%] text-[var(--gray-900)] font-semibold">
              Please check today’s site,
            </p>
            <p className="text-[26px] leading-[160%] text-[var(--color-text)] font-extrabold">
              Manager Kim
            </p>
          </div>
          <img
            src={""}
            alt="profile"
            className="block rounded-full w-[52px] h-[52px] bg-[#D9D9D9]"
          />
        </div>
        <div
          onClick={() => {}}
          className="mt-[32px] flex justify-between items-center"
        >
          <TitleText title="Daily Safty Check" />
          <img src="/images/arrow_right.svg" alt="arrow-right" />
        </div>
        {!isRegister && (
          <div className="mt-[14px] w-full h-[104px] bg-[var(--color-secondary)] rounded-[20px] shadow-[0px_0px_20px_-4px_rgba(187,192,199,0.5)] px-[27px] py-[22px]">
            <p className="text-[18px] leading-[160%] font-medium text-[var(--color-text)]">
              Site safety score / Risk score
            </p>
            <p className="text-[18px] leading-[160%] font-regular text-[var(--gray-800)]">
              Safety checklist not submitted yet.
            </p>
          </div>
        )}
        {isRegister && (
          <div className="mt-[14px] w-full grid grid-cols-2 gap-[12px]">
            <SafetyScore />
            <RiskScore />
          </div>
        )}

        <TitleText title="Today’s Site Info" className="mt-[37px] mb-[14px]" />
        <TodaySiteInfoCard
          isRegister={true}
          address={
            isRegister
              ? "123, Teheran-ro,\nGangnam-gu, Seoul, Korea"
              : undefined
          }
        />
      </main>
      <BottomMenu />
    </div>
  );
}

/** 타이틀 텍스트 */
function TitleText({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <p
      className={`text-[20px] leading-[160%] text-[var(--color-text)] font-bold ${className}`}
    >
      {title}
    </p>
  );
}

/** 안전점수 */
function SafetyScore() {
  return (
    <div className="w-full bg-[var(--color-secondary)] rounded-[20px] py-[20px] px-[16px] shadow-[0px_0px_20px_-4px_rgba(187,192,199,0.5)]">
      <p className="text-center text-[18px] font-medium">Site safety score</p>
      <div className="flex justify-center items-baseline gap-[2px] mr-[calc(-1px)]">
        <p className="text-[40px] font-bold text-[var(--color-alert-safe)]">
          90
        </p>
        <p className="text-[16px] font-medium leading-[160%] text-[var(--gray-800)]">
          pts
        </p>
      </div>
    </div>
  );
}
/** 위험률 */
function RiskScore() {
  return (
    <div className="w-full bg-[var(--color-secondary)] rounded-[20px] py-[20px] px-[16px] shadow-[0px_0px_20px_-4px_rgba(187,192,199,0.5)]">
      <p className="text-center text-[18px] font-medium">Risk score</p>
      <div className="flex justify-center items-baseline gap-[2px] mr-[calc(-1px)]">
        <p className="text-[40px] font-bold text-[var(--color-alert-dangers)]">
          10
        </p>
        <p className="text-[16px] font-medium leading-[160%] text-[var(--gray-800)]">
          pts
        </p>
      </div>
    </div>
  );
}
/** 오늘의 현장 정보 */
function TodaySiteInfoCard({
  isRegister = false,
  address,
}: {
  isRegister?: boolean;
  address?: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: isRegister
          ? "var(--color-primary)"
          : "var(--gray-800)",
      }}
      className="relative overflow-hidden w-full h-[275px] bg-[var(--gray-800)] rounded-[20px] py-[24px] px-[27px] shadow-[0px_0px_20px_-4px_rgba(187,192,199,0.5)]"
    >
      <p className="text-[15px] leading-[160%] font-regular text-[rgba(253,254,255,0.6)]">
        {dayjs(new Date()).format("YYYY/MM/DD")}
      </p>
      <div className="mt-[6px] flex justify-start items-baseline gap-[7px]">
        <img src="/images/gps.svg" alt="gps" />
        <p className="indent-[22px] ml-[-22px] text-[22px] leading-[160%] font-bold text-[var(--gray-500)] whitespace-pre-wrap">
          {address ? address : "Site not registered"}
        </p>
      </div>
      <div className="mt-[18px]">
        <p className="text-[18px] leading-[160%] font-regular text-[var(--gray-600)]">
          Submission Status
        </p>
        <span
          style={{
            backgroundColor: isRegister
              ? "var(--color-text)"
              : "rgba(0,0,0,0.2)",
          }}
          className="inline-flex justify-center items-center px-[15px] h-[38px] mt-[6px] bg-[rgba(0,0,0,0.2)] rounded-[50px] text-[16px] font-medium text-[var(--gray-600)]"
        >
          {isRegister ? "Approved" : "Not Submitted"}
        </span>
      </div>
      {isRegister && (
        <button
          onClick={() => {}}
          className="w-[65px] h-[62px] whitespace-nowrap absolute bottom-0 right-0 bg-[var(--color-secondary)] text-[20px] leading-[160%] font-bold text-[var(--color-secondary)] rounded-tl-[30px] py-[10px] flex justify-center items-center gap-[17px]"
        >
          <img src="/images/arrow_right_pointer_blue.svg" alt="arrow-right" />
        </button>
      )}
      {!isRegister && (
        <button
          onClick={() => navigate("/daily-safety-check")}
          className="pl-[29px] pr-[23px] h-[62px] whitespace-nowrap absolute bottom-0 right-0 bg-[var(--color-primary)] text-[20px] leading-[160%] font-bold text-[var(--color-secondary)] rounded-tl-[30px] py-[10px] px-[16px] flex justify-between items-center gap-[17px]"
        >
          Start AI Safety Check
          <img src="/images/arrow_right_pointer.svg" alt="arrow-right" />
        </button>
      )}
    </div>
  );
}
