import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <h1 className="text-black">Maverick 홈</h1>
      <button onClick={() => navigate("/login")}>로그인</button>
    </div>
  );
}
