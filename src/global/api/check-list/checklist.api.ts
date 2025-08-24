import type { IBaseErrorResponse, IBaseResponse } from "@/global/api/api.type";
import type { TGetCheckListRes } from "@/global/api/check-list/checklist.type";
import defaultQueryFn from "@/global/api/defaultQueryFn";
import { useMutation } from "@tanstack/react-query";

export function useGetCheckList() {
  const mutation = useMutation<
    IBaseResponse<TGetCheckListRes[]>,
    IBaseErrorResponse<unknown>,
    { addressId: number }
  >({
    mutationFn: (variables) => {
      return defaultQueryFn<IBaseResponse<TGetCheckListRes[]>>({
        queryKey: [
          {
            url: "/api/check-list/generate",
            method: "POST",
            data: variables,
          },
        ],
      });
    },
  });

  return mutation;
}
export type TPostAnalysisRequestReq = {
  addressId: number;
  numOfWorkers: number;
  addressInfoList: {
    title: string;
    description: string;
    answer: boolean;
  }[];
};
export function usePostAnalysisRequest() {
  const mutation = useMutation<
    IBaseResponse<unknown>,
    IBaseErrorResponse<unknown>,
    TPostAnalysisRequestReq
  >({
    mutationFn: (variables) => {
      return defaultQueryFn<IBaseResponse<unknown>>({
        queryKey: [
          {
            url: "/api/safety-assessment/analyze",
            method: "POST",
            data: variables,
          },
        ],
      });
    },
  });

  return mutation;
}
