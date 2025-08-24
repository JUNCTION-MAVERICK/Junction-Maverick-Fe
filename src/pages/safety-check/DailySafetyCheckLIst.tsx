import { usePostAnalysisRequest } from "@/global/api/check-list/checklist.api";
import { useCheckListStore } from "@/global/stores/checkListStore";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export default function DailySafetyCheckList() {
  const navigate = useNavigate();
  const { analysisRequest } = useCheckListStore();
  // const [selectedPhoto, setSelectedPhoto] = useState<number[]>([]);
  const { mutateAsync: postAnalysisRequest } = usePostAnalysisRequest();

  const isAllChecked = analysisRequest.addressInfoList?.every(
    (item) => item.answer !== undefined
  );

  const handleSubmit = () => {
    postAnalysisRequest(
      {
        addressId: analysisRequest.addressId ?? 0,
        numOfWorkers: analysisRequest.numOfWorkers ?? 0,
        addressInfoList: (analysisRequest.addressInfoList ?? []).filter(
          (item) => item.answer !== undefined
        ) as { title: string; description: string; answer: boolean }[],
      },
      {
        onSuccess: () => {
          navigate("/daily-safety-check-finish");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  console.log({ isAllChecked });
  return (
    <main className="w-full min-h-screen px-[20px] pt-[124px] pb-[160px]">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-[20px] leading-[160%] text-[var(--gray-700)] font-light">
          {dayjs(new Date()).format("YYYY/MM/DD")}
        </p>
        <p className="text-[24px] leading-[160%] text-[var(--color-text-title)] font-bold">
          Daily Safety Checklist
        </p>
      </div>
      <div className="w-full flex flex-col gap-[30px] mt-[24px]">
        {analysisRequest.addressInfoList?.map((item, index) => (
          <CheckListCheckItem
            key={`${item.title}_${index}`}
            index={index + 1}
            title={item.title}
            description={item.description}
            value={item.answer ?? undefined}
          />
        ))}
      </div>
      <button
        disabled={!isAllChecked}
        style={{
          backgroundColor: isAllChecked
            ? "var(--color-primary)"
            : "var(--gray-00)",
        }}
        className="fixed w-[calc(100%-40px)] bottom-[30px] left-1/2 -translate-x-1/2 h-[59px]  text-[16px] font-semibold leading-[22px] text-[var(--color-tertiary)] rounded-[20px]"
        onClick={handleSubmit}
      >
        Submit to Contractor
      </button>
    </main>
  );
}

function CheckListCheckItem({
  index,
  title,

  onClick,
  value,
  description,
}: {
  index: number;
  title: string;
  className?: string;
  onClick?: () => void;
  value?: boolean | undefined;
  description?: string;
}) {
  const { analysisRequest, setAnalysisRequest } = useCheckListStore();

  return (
    <div className="w-full flex justify-start items-start gap-[9px]">
      <div className="flex flex-col justify-start items-center">
        <span className="w-[26px] h-[26px] rounded-full bg-[var(--color-secondary)] text-[16px] leading-[160%] text-[var(--color-tertiary)] font-semibold flex justify-center items-center">
          {index}
        </span>
        <span className="block w-[2.5px] h-full flex-1 bg-[var(--gray-600)]" />
      </div>
      <div className="flex-1 shrink-0 py-[16px] px-[19px] bg-[var(--color-tertiary)] rounded-[20px] shadow-[0px_0px_20px_-4px_rgba(187,192,199,0.5)] grid grid-cols-[1fr_107px] gap-[19px]">
        <div>
          <p className="text-[16px] font-semibold leading-[140%] text-[var(--color-text)] line-clamp-2">
            {title}
          </p>
          <span className="block w-full h-[1.5px] bg-[var(--gray-600)] my-[14px]" />
          <p className="text-[16px] font-regular leading-[22px] text-[var(--gray-900)] line-clamp-2">
            {description}
          </p>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          <CheckBox
            label="YES"
            onClick={() =>
              setAnalysisRequest({
                ...analysisRequest,
                addressInfoList: analysisRequest.addressInfoList?.map(
                  (item) => ({
                    ...item,
                    answer: item.title === title ? true : item.answer,
                  })
                ),
              })
            }
            checked={value === true}
          />
          <CheckBox
            label="No"
            onClick={() =>
              setAnalysisRequest({
                ...analysisRequest,
                addressInfoList: analysisRequest.addressInfoList?.map(
                  (item) => ({
                    ...item,
                    answer: item.title === title ? false : item.answer,
                  })
                ),
              })
            }
            checked={value === false}
          />
        </div>
        <button
          className="col-span-2 w-full h-[59px] border border-width-[1.5px] border-[var(--color-primary)] text-[16px] font-semibold leading-[22px] text-[var(--color-primary)] rounded-[20px]"
          onClick={onClick}
        >
          Upload photo
        </button>
      </div>
    </div>
  );
}

function CheckBox({
  label,
  onClick,
  checked,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="w-full h-[56px] border border-width-[1.5px] border-[#D4DBE5] rounded-[15px] bg-[var(--color-tertiary)] flex justify-end items-center gap-[18px] p-[10px]"
      style={{
        borderColor: checked ? "var(--color-primary)" : "#D4DBE5",
      }}
    >
      <p
        style={{ color: checked ? "var(--color-primary)" : "var(--gray-900)" }}
        className="text-[16px] font-semibold leading-[22px] text-[var(--gray-900)]"
      >
        {label}
      </p>
      <span
        style={{
          backgroundColor: checked ? "var(--color-primary)" : "var(--gray-600)",
          backgroundImage: checked ? "url(/images/check_white.svg)" : "",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="block w-[35px] h-[35px] bg-[var(--gray-600)]  rounded-[10px]"
      />
    </div>
  );
}
