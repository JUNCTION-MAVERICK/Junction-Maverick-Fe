import HeaderBasic from "@/components/Header/HeaderBasic";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSiteStore } from "@/global/stores";
import { useGetCheckList } from "@/global/api/check-list/checklist.api";
import LoadingPage from "@/components/Loading/LoadingPage";

export default function SiteInfoRegister() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { siteInfo, setNumberOfWorkers, setCheckListCheck, resetSiteInfo } =
    useSiteStore();
  const { mutate: getCheckList } = useGetCheckList();

  const isDisabledNavigate = useMemo(() => {
    return (
      !siteInfo.siteAddress ||
      !siteInfo.numberOfWorkers ||
      !siteInfo.checkListCheck
    );
  }, [siteInfo.siteAddress, siteInfo.numberOfWorkers, siteInfo.checkListCheck]);

  const handleNumberOfWorkers = (value: string) => {
    setNumberOfWorkers(value);
  };

  const handleCheckListCheck = (value: string) => {
    setCheckListCheck(value);
  };

  const onClickSubmit = () => {
    resetSiteInfo();
    setIsLoading(true);
    getCheckList(
      { addressId: 1 },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <HeaderBasic theme="dark" title="Register Site Info" />
      <main className="w-full min-h-screen px-[20px] pt-[124px] pb-[160px]">
        <div>
          <TitleText title="Search Site" className="mt-[30px] mb-[5px]" />
          <div className="relative">
            <input
              className="w-full h-[52px] bg-[var(--color-tertiary)] shadow-[0px_0px_10px_0px_rgba(187,192,199,0.2)] rounded-[100px] px-[22px] py-[14px] pr-[53px] text-[16px] leading-[160%] font-bold text-[var(--color-text)] placeholder:text-[var(--gray-700)]"
              type="text"
              placeholder="Search Site"
              value={siteInfo.siteAddress}
              readOnly
            />
            <button
              onClick={() =>
                navigate("/site-info-register/search-site", { replace: true })
              }
              className="absolute right-[22px] top-1/2 -translate-y-1/2"
            >
              <img src="/images/search.svg" alt="search" />
            </button>
          </div>
        </div>
        <div>
          <TitleText title="Work Date" className="mt-[25px] mb-[5px]" />
          <input
            className="w-full h-[52px] bg-[#D4DBE5] border border-[var(--gray-700)] border-width-[1.5px] shadow-[0px_0px_10px_0px_rgba(187,192,199,0.2)] rounded-[100px] px-[22px] py-[14px] text-[16px] leading-[160%] font-regular text-[var(--gray-700)] placeholder:text-[var(--gray-700)]"
            type="text"
            placeholder="YYYY/MM/DD"
            disabled
            value={dayjs(new Date()).format("YYYY/MM/DD")}
          />
        </div>
        <div>
          <TitleText title="Number of Workers" className="mt-[25px] mb-[5px]" />
          <div className="flex justify-start items-center gap-[9px]">
            <NumberOfWorkersItem
              title="1 - 10"
              value={siteInfo.numberOfWorkers === "10"}
              onClick={() => handleNumberOfWorkers("10")}
            />
            <NumberOfWorkersItem
              title="11 - 29"
              value={siteInfo.numberOfWorkers === "30"}
              onClick={() => handleNumberOfWorkers("30")}
            />
            <NumberOfWorkersItem
              title="30 - 49"
              value={siteInfo.numberOfWorkers === "50"}
              onClick={() => handleNumberOfWorkers("50")}
            />
          </div>
        </div>
        <div>
          <TitleText
            title="Do you already have a checklist?"
            className="mt-[30px] mb-[8px]"
          />
          <CheckListCheckItem
            title="Generate a new checklist with AI"
            value={siteInfo.checkListCheck === "ai"}
            onClick={() => {
              handleCheckListCheck("ai");
              // navigate("/daily-safety-check-list");
            }}
          />
          <CheckListCheckItem
            className="mt-[9px]"
            title="I have a checklist (Photo Scan)"
            value={siteInfo.checkListCheck === "scan"}
            onClick={() => handleCheckListCheck("scan")}
          />
        </div>

        <button
          disabled={isDisabledNavigate}
          onClick={onClickSubmit}
          style={{
            width: "calc(100% - 40px)",
            backgroundColor: isDisabledNavigate
              ? "var(--gray-800)"
              : "var(--color-primary)",
          }}
          className="fixed bottom-[30px] h-[74px] text-[20px] font-bold text-[var(--color-tertiary)] rounded-[20px]"
        >
          Finish Site Registration
        </button>
      </main>
    </>
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
      className={`text-[18px] leading-[160%] text-[var(--color-text)] font-semibold ${className}`}
    >
      {title}
    </p>
  );
}

/** Number of Workers Item */
function NumberOfWorkersItem({
  title,
  className,
  onClick,
  value,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
  value?: boolean;
}) {
  return (
    <button
      type="button"
      className={`h-[52px] px-[19px] flex justify-center items-center border border-width-[1.5px] border-[#A5ABB3] rounded-[50px] text-[16px] font-medium text-[#A5ABB3] whitespace-nowrap ${className}`}
      style={{
        borderColor: value ? "var(--color-primary)" : "#A5ABB3",
        backgroundColor: value ? "rgba(6, 96, 254, 0.07)" : "transparent",
        color: value ? "var(--color-primary)" : "#A5ABB3",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
/** 체크리스트 유무 체크 아이템 */
function CheckListCheckItem({
  title,
  className,
  onClick,
  value,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
  value?: boolean;
}) {
  return (
    <button
      type="button"
      className={`w-full h-[52px] text-left px-[19px] border border-width-[1.5px] border-[#A5ABB3] rounded-[50px] text-[16px] font-medium text-[#A5ABB3] whitespace-nowrap ${className}`}
      style={{
        borderColor: value ? "var(--color-primary)" : "#A5ABB3",
        backgroundColor: value ? "rgba(6, 96, 254, 0.07)" : "transparent",
        color: value ? "var(--color-primary)" : "#A5ABB3",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
