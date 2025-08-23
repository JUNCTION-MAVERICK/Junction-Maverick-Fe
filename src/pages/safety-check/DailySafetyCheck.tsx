import { useNavigate } from "react-router-dom";

export default function DailySafetyCheck() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1 className="text-2xl font-bold">DailySafetyCheck</h1>
      </header>
      <main className="flex flex-col gap-2">
        <button
          onClick={() => {
            navigate("/site-info-register");
          }}
        >
          Start AI Safety Check
        </button>
        <button onClick={() => {}}>Load Previous Checklist</button>
      </main>
    </div>
  );
}
