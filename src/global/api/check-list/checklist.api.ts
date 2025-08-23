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
