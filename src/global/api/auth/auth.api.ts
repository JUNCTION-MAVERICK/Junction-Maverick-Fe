import type { IBaseErrorResponse, IBaseResponse } from "@/global/api/api.type";
import type { TLoginRequest } from "@/global/api/auth/auth.type";
import defaultQueryFn from "@/global/api/defaultQueryFn";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const mutation = useMutation<
    IBaseResponse<unknown>,
    IBaseErrorResponse<unknown>,
    TLoginRequest
  >({
    mutationFn: (variables) => {
      return defaultQueryFn<IBaseResponse<unknown>>({
        queryKey: [
          {
            url: "/api/test/auth/login",
            method: "POST",
            data: variables,
          },
        ],
      });
    },
  });

  return mutation;
}
