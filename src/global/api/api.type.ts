import type { QueryKey } from "@tanstack/react-query";
import type { AxiosError, AxiosRequestConfig } from "axios";

export interface IBaseResponse<T = unknown> {
  timestamp: string;
  status: number;
  errorMsg?: string;
  message?: string;
  rowCount?: number;
  totalCount?: number;
  data: T;
}

export type IBaseErrorResponse<T = unknown> = AxiosError<T> & {
  status: number;
  errorMsg: string;
  message: string;
};

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IDefaultQueryFunctionContext {
  queryKey: TDefaultQueryKey;
  pageParam?: string | number;
}

export type TDefaultQueryKey = QueryKey | [axiosConfig: AxiosRequestConfig];

export type TPageParam = {
  page: number;
  size: number;
};
