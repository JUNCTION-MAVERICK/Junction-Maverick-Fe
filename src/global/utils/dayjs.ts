import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// 플러그인 등록
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

// 한국어 로케일 설정
dayjs.locale("ko");

export default dayjs;
