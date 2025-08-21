/**
 * 데이터 유틸리티 함수들
 */

export const DataUtils = {
  /**
   * 객체가 비어있는지 확인
   */
  isEmpty: (obj: any): boolean => {
    if (obj === null || obj === undefined) return true;
    if (typeof obj === "string") return obj.trim().length === 0;
    if (Array.isArray(obj)) return obj.length === 0;
    if (typeof obj === "object") return Object.keys(obj).length === 0;
    return false;
  },

  /**
   * 깊은 복사 수행
   */
  deepClone: <T>(obj: T): T => {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj.getTime()) as T;
    if (obj instanceof Array)
      return obj.map((item) => DataUtils.deepClone(item)) as T;
    if (typeof obj === "object") {
      const clonedObj = {} as T;
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          clonedObj[key] = DataUtils.deepClone(obj[key]);
        }
      }
      return clonedObj;
    }
    return obj;
  },
};
