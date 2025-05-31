import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext.ts";

export default function SettingsAddTeam() {
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);
  const {
    store: { teams },
    onAddTeamClick,
    showTeamForm,
  } = useAppContext();

  const generateUniqueId: any = () => {
    const newId = Math.floor(Math.random() * 10000);
    return teams.some((team) => team.id === newId) ? generateUniqueId() : newId;
  };

  const handleSave = () => {
    if (name === "") {
      setIsError(true);
      return;
    }

    onAddTeamClick({
      id: generateUniqueId(),
      name,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
    });
    showTeamForm(false);
  };

  const handleCancel = () => {
    showTeamForm(false);
  };

  return (
    <div className="flex gap-2 pt-2">
      <fieldset className="fieldset w-full gap-0 p-0">
        <input
          className={`input input-primary bg-primary-content ${isError ? "border-error" : "border-primary"}`}
          type="text"
          placeholder="Team name"
          value={name}
          autoFocus
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setIsError(false)}
        />
        {isError && <p className="label text-error">Team name is required</p>}
      </fieldset>

      <button className="btn btn-primary" onClick={handleSave}>
        Save
      </button>
      <button className="btn btn-error btn-outline" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}
