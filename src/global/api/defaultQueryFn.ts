import type { IDefaultQueryFunctionContext } from "./api.type";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

// 개발 환경용 로컬 서버 URL
// export const API_BASE_URL = "http://localhost:8080";
// 운영 환경용 배포 서버 URL
export const API_BASE_URL = "https://api.junction-maverick.store";
const API_CLIENT_ID = "";
const API_TIMEOUT = 10000;

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    clientid: API_CLIENT_ID,
  },
});

// TODO: 인터셉터 구현 필요 (getAuthToken, logOut 함수 구현 후 활성화)
// 요청 인터셉터
// axiosInstance.interceptors.request.use(...)

// 응답 인터셉터
// axiosInstance.interceptors.response.use(...)

export function shouldFetchNextPage(
  lastPage: { data?: { length?: number } },
  allPages: { data?: { length?: number } }[],
  pageSize: number
): number | undefined {
  const nextPage = allPages.length + 1;
  const noLastPageData = (lastPage?.data?.length ?? 0) === 0;
  const lastPageData = (lastPage?.data?.length ?? 0) < pageSize;
  return noLastPageData || lastPageData ? undefined : nextPage;
}

export default async function defaultQueryFn<T>({
  queryKey,
  pageParam,
}: IDefaultQueryFunctionContext) {
  let options: AxiosRequestConfig = {};

  if (typeof queryKey[0] === "string") {
    options.url = queryKey[0];
  }

  if (typeof queryKey[queryKey.length - 1] === "object") {
    options = {
      ...options,
      ...(queryKey[queryKey.length - 1] as AxiosRequestConfig),
    };
  }

  if (pageParam) {
    options.params = {
      ...options.params,
      page: pageParam,
    };
  }

  if (
    pageParam &&
    options.data &&
    !Array.isArray(options.data) &&
    !(options.data instanceof FormData)
  ) {
    options.data = {
      ...options.data,
      page: pageParam,
    };
  }

  options.timeout = options.timeout ?? API_TIMEOUT;

  try {
    const { data } = await axiosInstance.request<T>(options);
    return data;
  } catch (error) {
    // 에러 처리
    if (axios.isAxiosError(error)) {
      // Axios 에러 처리
      const status = error.response?.status;
      const message = error.response?.data?.message || error.message;
      throw { status, message };
    }
    throw error;
  }
}
