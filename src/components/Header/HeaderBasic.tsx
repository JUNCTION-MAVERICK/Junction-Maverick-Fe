import { useSiteStore } from "@/global/stores";
import { useNavigate } from "react-router-dom";

export default function HeaderBasic({
  theme = "dark",
  title,
}: {
  theme?: "dark" | "light";
  title?: string;
}) {
  const navigate = useNavigate();
  const { resetSiteInfo } = useSiteStore();
  return (
    <div
      className="fixed top-0 left-0 w-full h-[124px] pt-[47px] z-10 flex justify-center items-center"
      style={{
        backgroundColor:
          theme === "dark" ? "var(--color-secondary)" : "var(--color-bg)",
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
          src="/images/arrow_left.svg"
          alt="arrow-left"
          className="object-contain"
        />
      </button>
      <p className="text-[22px] leading-[160%] text-[var(--color-tertiary)] font-bold">
        {title}
      </p>
    </div>
  );
}
