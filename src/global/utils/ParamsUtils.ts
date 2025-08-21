/**
 * 파라미터 유틸리티 함수들
 */

export const ParamsUtils = {
  /**
   * URL 파라미터를 객체로 변환
   */
  parseQueryString: (queryString: string): Record<string, string> => {
    const params = new URLSearchParams(queryString);
    const result: Record<string, string> = {};

    for (const [key, value] of params.entries()) {
      result[key] = value;
    }

    return result;
  },

  /**
   * 객체를 URL 파라미터로 변환
   */
  buildQueryString: (params: Record<string, any>): string => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        searchParams.append(key, String(value));
      }
    });

    return searchParams.toString();
  },

  /**
   * 현재 URL의 파라미터 가져오기
   */
  getCurrentParams: (): Record<string, string> => {
    return ParamsUtils.parseQueryString(window.location.search);
  },

  /**
   * 특정 파라미터 값 가져오기
   */
  getParam: (name: string): string | null => {
    const params = ParamsUtils.getCurrentParams();
    return params[name] || null;
  },

  /**
   * URL 파라미터 업데이트
   */
  updateParams: (
    newParams: Record<string, any>,
    replace: boolean = false
  ): void => {
    const currentParams = ParamsUtils.getCurrentParams();
    const updatedParams = { ...currentParams, ...newParams };
    const queryString = ParamsUtils.buildQueryString(updatedParams);

    const newUrl = `${window.location.pathname}?${queryString}`;

    if (replace) {
      window.history.replaceState({}, "", newUrl);
    } else {
      window.history.pushState({}, "", newUrl);
    }
  },

  /**
   * 파라미터 제거
   */
  removeParams: (paramNames: string[]): void => {
    const currentParams = ParamsUtils.getCurrentParams();
    const updatedParams = { ...currentParams };

    paramNames.forEach((name) => {
      delete updatedParams[name];
    });

    const queryString = ParamsUtils.buildQueryString(updatedParams);
    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;

    window.history.replaceState({}, "", newUrl);
  },
};
