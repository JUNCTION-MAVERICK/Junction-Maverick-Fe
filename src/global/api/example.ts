import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import defaultQueryFn from "./defaultQueryFn";
import type { IBaseResponse } from "./api.type";

// 예시 데이터 타입
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
}

// 사용자 목록 조회
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      defaultQueryFn<IBaseResponse<User[]>>({ queryKey: ["users"] }),
  });
};

// 사용자 상세 조회
export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () =>
      defaultQueryFn<IBaseResponse<User>>({ queryKey: ["users", id] }),
    enabled: !!id,
  });
};

// 사용자 생성
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: CreateUserRequest) =>
      defaultQueryFn<IBaseResponse<User>>({
        queryKey: ["users", { method: "POST", data: userData }],
      }),
    onSuccess: () => {
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// 사용자 수정
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userData }: { id: number; userData: Partial<User> }) =>
      defaultQueryFn<IBaseResponse<User>>({
        queryKey: [`users/${id}`, { method: "PUT", data: userData }],
      }),
    onSuccess: (_, { id }) => {
      // 사용자 목록과 상세 정보 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["users", id] });
    },
  });
};

// 사용자 삭제
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) =>
      defaultQueryFn<IBaseResponse<void>>({
        queryKey: [`users/${id}`, { method: "DELETE" }],
      }),
    onSuccess: () => {
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
