/**
 * 토큰 관련 유틸리티 함수들
 */

export const TokenUtils = {
  /**
   * 액세스 토큰 저장
   */
  setAccessToken: (token: string): void => {
    localStorage.setItem("accessToken", token);
  },

  /**
   * 액세스 토큰 가져오기
   */
  getAccessToken: (): string | null => {
    return localStorage.getItem("accessToken");
  },

  /**
   * 액세스 토큰 삭제
   */
  removeAccessToken: (): void => {
    localStorage.removeItem("accessToken");
  },

  /**
   * 리프레시 토큰 저장
   */
  setRefreshToken: (token: string): void => {
    localStorage.setItem("refreshToken", token);
  },

  /**
   * 리프레시 토큰 가져오기
   */
  getRefreshToken: (): string | null => {
    return localStorage.getItem("refreshToken");
  },

  /**
   * 리프레시 토큰 삭제
   */
  removeRefreshToken: (): void => {
    localStorage.removeItem("refreshToken");
  },

  /**
   * 모든 토큰 삭제
   */
  clearAllTokens: (): void => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },

  /**
   * 토큰 존재 여부 확인
   */
  hasToken: (): boolean => {
    return !!TokenUtils.getAccessToken();
  },

  /**
   * 토큰 만료 시간 확인 (JWT)
   */
  isTokenExpired: (token: string): boolean => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp < currentTime;
    } catch {
      return true;
    }
  },
};
