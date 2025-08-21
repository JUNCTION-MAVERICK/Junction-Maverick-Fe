/**
 * 쿠키 유틸리티 함수들
 */

export const CookieUtils = {
  /**
   * 쿠키 설정
   */
  set: (name: string, value: string, days: number = 7): void => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  },

  /**
   * 쿠키 가져오기
   */
  get: (name: string): string | null => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

  /**
   * 쿠키 삭제
   */
  delete: (name: string): void => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  },

  /**
   * 모든 쿠키 가져오기
   */
  getAll: (): Record<string, string> => {
    const cookies: Record<string, string> = {};
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      const c = ca[i].trim();
      const eqIndex = c.indexOf("=");
      if (eqIndex > 0) {
        const name = c.substring(0, eqIndex);
        const value = c.substring(eqIndex + 1);
        cookies[name] = value;
      }
    }
    return cookies;
  },

  /**
   * 쿠키 존재 여부 확인
   */
  exists: (name: string): boolean => {
    return CookieUtils.get(name) !== null;
  },
};
