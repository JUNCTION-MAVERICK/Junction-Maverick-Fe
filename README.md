# Maverick Web App

A modern React application built with TypeScript and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🏗️ Project Structure

```
src/
├── global/
│   ├── api/              # API 관련 설정 및 함수
│   │   ├── api.type.ts   # API 타입 정의
│   │   ├── defaultQueryFn.ts # 기본 쿼리 함수
│   │   ├── react-query.ts    # React Query 설정
│   │   └── example.ts        # API 사용 예시
│   ├── utils/            # 유틸리티 함수들
│   │   ├── StringUtils.ts    # 문자열 유틸리티
│   │   ├── DataUtils.ts      # 데이터 유틸리티
│   │   ├── CookieUtils.ts    # 쿠키 유틸리티
│   │   ├── ImageUtils.ts     # 이미지 유틸리티
│   │   ├── ParamsUtils.ts    # 파라미터 유틸리티
│   │   ├── token.utils.ts    # 토큰 유틸리티
│   │   └── index.ts          # 유틸리티 인덱스
│   └── hooks/            # 커스텀 훅들
├── components/           # 재사용 가능한 컴포넌트들
├── pages/               # 페이지 컴포넌트들
└── App.tsx              # 메인 앱 컴포넌트
```

## 🛠️ Tech Stack

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구 및 개발 서버
- **Tailwind CSS** - CSS 프레임워크
- **React Query** - 서버 상태 관리
- **Axios** - HTTP 클라이언트

## 🔌 API Integration

### React Query + Axios

이 프로젝트는 `@tanstack/react-query`와 `axios`를 사용하여 API 통신을 관리합니다.

#### 기본 설정

```typescript
// API 기본 URL 설정
export const API_BASE_URL = "https://api.maverick.com";

// Axios 인스턴스
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
```

#### 쿼리 사용 예시

```typescript
// 데이터 조회
const { data, isLoading, error } = useUsers();

// 데이터 생성
const createUser = useCreateUser();
createUser.mutate({ name: "John", email: "john@example.com" });
```

#### 뮤테이션 사용 예시

```typescript
const updateUser = useUpdateUser();

const handleUpdate = () => {
  updateUser.mutate({
    id: 1,
    userData: { name: "Updated Name" },
  });
};
```

## 🎨 Styling

Tailwind CSS를 사용하여 스타일링합니다.

```tsx
<div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature Title</h3>
  <p className="text-gray-600">Feature description</p>
</div>
```

## 📱 Features

- ⚡ **Fast Development** - Vite로 빠른 개발 환경
- 🎨 **Beautiful UI** - Tailwind CSS로 모던한 디자인
- 🔒 **Type Safe** - TypeScript로 타입 안전성 보장
- 🔌 **API Ready** - React Query + Axios로 API 통신 준비 완료
- 🛠️ **Developer Experience** - React Query DevTools 포함

## 🔧 Configuration

### Tailwind CSS

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### PostCSS

```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 📚 Available Scripts

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드된 앱 미리보기
- `npm run lint` - ESLint 실행

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
