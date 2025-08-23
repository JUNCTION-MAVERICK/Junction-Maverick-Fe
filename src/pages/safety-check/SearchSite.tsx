import HeaderSearch from "@/components/Header/HeaderSearch";
import { ErrorBoundary } from "@suspensive/react";
import { useGetConstructionAddressList } from "@/global/api/construction-address/ca.api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { useSiteStore } from "@/global/stores";

export default function SearchSite() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const { setSiteAddress } = useSiteStore();
  const { data: siteList } = useGetConstructionAddressList({
    keyword: "",
  });

  // 하이라이트 함수
  const highlightText = (text: string | undefined, searchTerm: string) => {
    // text가 undefined이거나 빈 문자열인 경우 처리
    if (!text || !searchTerm) {
      return text || "";
    }

    if (!text.toLowerCase().includes(searchTerm.toLowerCase())) {
      return text;
    }

    const parts = text.split(new RegExp(searchTerm, "gi"));
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index < parts.length - 1 && (
          <span style={{ color: "var(--color-primary)" }}>
            {text.substring(
              text
                .toLowerCase()
                .indexOf(
                  searchTerm.toLowerCase(),
                  parts.slice(0, index).join("").length
                ),
              text
                .toLowerCase()
                .indexOf(
                  searchTerm.toLowerCase(),
                  parts.slice(0, index).join("").length
                ) + searchTerm.length
            )}
          </span>
        )}
      </span>
    ));
  };

  const NoData = useMemo(() => {
    if (siteList?.data && siteList?.data?.length > 0) {
      return false;
    } else return true;
  }, [siteList]);

  return (
    <>
      <HeaderSearch />
      <main
        className="w-full min-h-screen pt-[124px] pb-[160px]"
        style={{
          backgroundColor: NoData ? "var(--color-bg)" : "var(--color-tertiary)",
        }}
      >
        {NoData && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <p className="text-[18px] leading-[160%] font-regular text-[var(--gray-800)]">
              Search for your site to register...
            </p>
          </div>
        )}
        <ErrorBoundary
          fallback={
            <div className="p-4 text-center text-red-600">
              데이터를 불러오는 중 오류가 발생했습니다.
            </div>
          }
        >
          {siteList?.data?.map((site, index) => (
            <div
              key={`${site.addressId}_${index}`}
              className="flex justify-start items-start gap-[13px] px-[20px] pt-[10px] pb-[13px] bg-[var(--color-tertiary)] hover:bg-[var(--color-bg)] active:bg-[var(--color-bg)] rounded-[10px] transition-colors duration-200"
              onClick={() => {
                setSiteAddress(site.englishStreetAddress);
                navigate(`/site-info-register`);
              }}
            >
              <img src="/images/search.svg" alt="search" className="mt-[2px]" />
              <div>
                <p className="text-[16px] leading-[140%] font-bold text-[var(--color-text)]">
                  {highlightText(site.englishStreetAddress, search)}
                </p>
                <p className="mt-[5px] text-[14px] leading-[20px] font-regular text-[var(--gray-700)]">
                  {site.englishLotAddress} Street / Lot Address
                </p>
              </div>
            </div>
          ))}
        </ErrorBoundary>
      </main>
    </>
  );
}
