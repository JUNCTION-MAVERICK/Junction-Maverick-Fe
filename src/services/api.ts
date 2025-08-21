// API 기본 설정
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// 공통 fetch 함수
const fetchApi = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};

// 사용자 관련 API
export const userApi = {
  // 사용자 목록 조회
  getUsers: () => fetchApi("/users"),

  // 특정 사용자 조회
  getUser: (id: number) => fetchApi(`/users/${id}`),

  // 사용자 생성
  createUser: (user: { name: string; email: string }) =>
    fetchApi("/users", {
      method: "POST",
      body: JSON.stringify(user),
    }),

  // 사용자 수정
  updateUser: (id: number, user: { name: string; email: string }) =>
    fetchApi(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
    }),

  // 사용자 삭제
  deleteUser: (id: number) =>
    fetchApi(`/users/${id}`, {
      method: "DELETE",
    }),
};

// 게시물 관련 API
export const postApi = {
  // 게시물 목록 조회
  getPosts: () => fetchApi("/posts"),

  // 특정 게시물 조회
  getPost: (id: number) => fetchApi(`/posts/${id}`),

  // 사용자별 게시물 조회
  getPostsByUser: (userId: number) => fetchApi(`/posts?userId=${userId}`),

  // 게시물 생성
  createPost: (post: { title: string; body: string; userId: number }) =>
    fetchApi("/posts", {
      method: "POST",
      body: JSON.stringify(post),
    }),
};

// 댓글 관련 API
export const commentApi = {
  // 게시물별 댓글 조회
  getCommentsByPost: (postId: number) => fetchApi(`/posts/${postId}/comments`),

  // 댓글 생성
  createComment: (comment: {
    postId: number;
    name: string;
    email: string;
    body: string;
  }) =>
    fetchApi("/comments", {
      method: "POST",
      body: JSON.stringify(comment),
    }),
};

export default {
  userApi,
  postApi,
  commentApi,
};


