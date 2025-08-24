import { useSiteStore } from "@/global/stores";
import { useNavigate } from "react-router-dom";

export default function HeaderBasicLight({ title }: { title?: string }) {
  const navigate = useNavigate();
  const { resetSiteInfo } = useSiteStore();
  return (
    <div
      className="fixed top-0 left-0 w-full h-[124px] pt-[47px] z-10 flex justify-center items-center"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <button
        className="absolute left-[10px] w-[35px] h-[35px] flex justify-center items-center"
        onClick={() => {
          resetSiteInfo();
          navigate(-1);
        }}
      >
        <img
          src="/images/arrow_right_black.svg"
          alt="arrow-left"
          className="object-contain"
        />
      </button>
      <p className="text-[22px] leading-[160%] text-[var(--color-text)] font-bold">
        {title}
      </p>{" "}
      <button
        className="absolute right-[10px] w-[35px] h-[35px] flex justify-center items-center"
        onClick={() => {
          // resetSiteInfo();
          // navigate(-1);
        }}
      >
        <img src="/images/pdf.svg" alt="pdf" className="object-contain" />
      </button>
    </div>
  );
}
