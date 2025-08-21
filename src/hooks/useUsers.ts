import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "@/services/api";

// 사용자 타입 정의
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface CreateUserData {
  name: string;
  email: string;
}

export interface UpdateUserData {
  name: string;
  email: string;
}

// 사용자 목록 조회
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: userApi.getUsers,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

// 특정 사용자 조회
export const useUser = (id: number) => {
  return useQuery({
    queryKey: ["users", id],
    queryFn: () => userApi.getUser(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

// 사용자 생성
export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.createUser,
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
    mutationFn: ({ id, user }: { id: number; user: UpdateUserData }) =>
      userApi.updateUser(id, user),
    onSuccess: (data, variables) => {
      // 특정 사용자 캐시 업데이트
      queryClient.setQueryData(["users", variables.id], data);
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

// 사용자 삭제
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: (_, deletedId) => {
      // 삭제된 사용자 캐시 제거
      queryClient.removeQueries({ queryKey: ["users", deletedId] });
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};


