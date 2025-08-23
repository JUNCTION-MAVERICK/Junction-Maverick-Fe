import { useNavigate } from "react-router-dom";

export default function SiteInfoRegister() {
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <div>
          <p>Search Site</p>
          <input className="border" type="text" placeholder="Search Site" />
        </div>
        <div>
          <p>Work Date</p>
          <input
            className="border"
            disabled
            type="text"
            value={new Date().toLocaleDateString()}
          />
        </div>
        <div>
          <p>Number of Workers</p>
          <div className="flex justify-between gap-2">
            <button>Less than 10</button>
            <button>Less than 30</button>
            <button>Less than 50</button>
          </div>
        </div>
        <div>
          <p>Do you already have a checklist?</p>
          <button
            className="border "
            onClick={() => navigate("/daily-safety-check-list")}
          >
            Generate a new checklist with AI
          </button>
          <button className="border">I have a checklist (Photo Scan)</button>
        </div>

        <button>Finish Site Registration</button>
      </form>
    </div>
  );
}
