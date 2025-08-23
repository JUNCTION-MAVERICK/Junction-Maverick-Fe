import { useSiteStore } from "@/global/stores";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderSearch({
  theme = "light",
}: {
  theme?: "dark" | "light";
}) {
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get("search") ?? "";
  const { siteInfo, setSiteAddress } = useSiteStore();
  const [inputValue, setInputValue] = useState<string>(siteInfo.siteAddress);

  // 디바운스된 검색 함수
  const debouncedSearch = useCallback(
    (value: string) => {
      const timeoutId = setTimeout(() => {
        if (value.trim()) {
          setSiteAddress(value);
        } else {
          setSiteAddress("");
        }
      }, 500);
      return () => clearTimeout(timeoutId);
    },
    [inputValue, setSiteAddress]
  );

  // input 값이 변경될 때마다 디바운스 적용
  useEffect(() => {
    const cleanup = debouncedSearch(inputValue);
    return cleanup;
  }, [inputValue, debouncedSearch]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[124px] pt-[47px] z-10 flex justify-center items-center"
      style={{
        backgroundColor:
          theme === "dark" ? "var(--color-secondary)" : "var(--color-tertiary)",
      }}
    >
      <button
        className="absolute left-[10px] w-[35px] h-[35px] flex justify-center items-center"
        onClick={() => navigate(-1)}
      >
        <img
          src="/images/arrow_left_black.svg"
          alt="arrow-left"
          className="object-contain"
        />
      </button>
      <div
        className="relative"
        style={{
          width: "calc(100% - 100px)",
        }}
      >
        <input
          type="text"
          className="w-full h-[52px] bg-[var(--color-tertiary)] border border-width-[1.5px] border-[var(--gray-600)] rounded-[100px] px-[19px] py-[10px] pr-[46px] text-[16px] leading-[160%] font-regular text-[var(--color-text)] placeholder:text-[var(--gray-700)]"
          placeholder="ex) Baekhyeon-dong 53"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="absolute right-[17px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] flex justify-center items-center"
          onClick={() => {
            setInputValue("");
            setSiteAddress("");
          }}
        >
          <img
            src="/images/x_circle.svg"
            alt="search"
            className="object-contain"
          />
        </button>
      </div>
      <span className="absolute right-[10px] w-[35px] h-[35px] flex justify-center items-center">
        <img
          src="/images/search_black.svg"
          alt="search"
          className="object-contain"
        />
      </span>
    </div>
  );
}
