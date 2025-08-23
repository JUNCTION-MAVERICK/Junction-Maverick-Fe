import { useNavigate } from "react-router-dom";

export default function DailySafetyCheckList() {
  const navigate = useNavigate();
  return (
    <div>
      <p>DailySafetyCheckList</p>
      <button onClick={() => navigate("/daily-safety-check-finish")}>
        Submit to Contractor
      </button>
    </div>
  );
}
