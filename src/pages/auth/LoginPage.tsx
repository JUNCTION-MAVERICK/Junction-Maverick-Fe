import { useLogin } from "@/global/api/auth/auth.api";

export default function LoginPage() {
  const { mutate: login } = useLogin();
  return (
    <div className="w-full h-full p-[20px] flex flex-col gap-2">
      <h1 className="text-2xl font-bold">로그인</h1>
      <input className="border-2 border-gray-300 rounded-md p-2" type="text" />
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="password"
      />
      <button
        className="bg-blue-500 text-white rounded-md p-2"
        onClick={() =>
          login({ userEmail: "admin@gmail.com", userPassword: "admin" })
        }
      >
        로그인
      </button>
    </div>
  );
}
