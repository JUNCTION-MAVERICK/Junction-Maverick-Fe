import type { IBaseResponse } from "@/global/api/api.type";
import type { TGetCAListRes } from "@/global/api/construction-address/ca.type";
import defaultQueryFn from "@/global/api/defaultQueryFn";
import { useQuery } from "@tanstack/react-query";

export function useGetConstructionAddressList(params: { keyword?: string }) {
  const query = useQuery({
    queryKey: [`ca-list`, params],
    queryFn: () => {
      return defaultQueryFn<IBaseResponse<TGetCAListRes[]>>({
        queryKey: [
          {
            url: `/api/construction-addresses`,
            method: "GET",
            params: params,
          },
        ],
      });
    },
    placeholderData: (previousData) => previousData, // 이전 데이터 유지
    staleTime: 5 * 60 * 1000, // 5분간 데이터를 fresh하게 유지
  });
  return query;
}
