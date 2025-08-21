import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { postApi } from "@/services/api";

// 게시물 타입 정의
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CreatePostData {
  title: string;
  body: string;
  userId: number;
}

// 게시물 목록 조회
export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: postApi.getPosts,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

// 특정 게시물 조회
export const usePost = (id: number) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => postApi.getPost(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};

// 사용자별 게시물 조회
export const usePostsByUser = (userId: number) => {
  return useQuery({
    queryKey: ["posts", "user", userId],
    queryFn: () => postApi.getPostsByUser(userId),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5,
  });
};

// 게시물 생성
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postApi.createPost,
    onSuccess: (newPost) => {
      // 게시물 목록 캐시에 새 게시물 추가
      queryClient.setQueryData(["posts"], (oldPosts: Post[] | undefined) => {
        if (oldPosts) {
          return [newPost, ...oldPosts];
        }
        return [newPost];
      });

      // 사용자별 게시물 캐시도 업데이트
      queryClient.invalidateQueries({
        queryKey: ["posts", "user", newPost.userId],
      });
    },
  });
};


