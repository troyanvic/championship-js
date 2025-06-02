import React, { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext.ts";

export default function SettingsEditTeam({
  id,
  name: teamName,
  onSave,
  onCancel,
}: {
  id: number;
  name: string;
  onSave: () => void;
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { editTeam } = useAppContext();
  const [name, setName] = useState(teamName);
  const [isError, setIsError] = useState(false);

  const handleSave = () => {
    editTeam({ id, name });
    onSave();
  };

  return (
    <div className="flex gap-2 pt-2 pb-2">
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
      <button className="btn btn-error btn-outline" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}
