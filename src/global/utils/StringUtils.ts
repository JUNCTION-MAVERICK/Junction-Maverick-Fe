/**
 * 문자열 유틸리티 함수들
 */

export const StringUtils = {
  /**
   * 문자열이 비어있는지 확인
   */
  isEmpty: (str: string | null | undefined): boolean => {
    return !str || str.trim().length === 0;
  },

  /**
   * 문자열을 지정된 길이로 자르고 ... 추가
   */
  truncate: (str: string, length: number): string => {
    if (str.length <= length) return str;
    return str.substring(0, length) + "...";
  },

  /**
   * 첫 글자를 대문자로 변환
   */
  capitalize: (str: string): string => {
    if (StringUtils.isEmpty(str)) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * 카멜케이스를 스네이크케이스로 변환
   */
  camelToSnake: (str: string): string => {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  },

  /**
   * 스네이크케이스를 카멜케이스로 변환
   */
  snakeToCamel: (str: string): string => {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  },

  /**
   * 문자열에서 HTML 태그 제거
   */
  stripHtml: (str: string): string => {
    return str.replace(/<[^>]*>/g, "");
  },

  /**
   * 문자열에서 특수문자 제거
   */
  removeSpecialChars: (str: string): string => {
    return str.replace(/[^a-zA-Z0-9\s]/g, "");
  },

  /**
   * 문자열을 지정된 길이로 패딩
   */
  padStart: (str: string, length: number, char: string = " "): string => {
    return str.padStart(length, char);
  },

  /**
   * 문자열을 지정된 길이로 패딩 (뒤쪽)
   */
  padEnd: (str: string, length: number, char: string = " "): string => {
    return str.padEnd(length, char);
  },
};
