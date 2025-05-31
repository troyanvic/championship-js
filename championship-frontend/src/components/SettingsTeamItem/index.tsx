import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import EditIcon from "../EditIcon";
import RemoveIcon from "../RemoveIcon";
import SettingsEditTeam from "../SettingsEditTeam";

export default function SettingsTeamItem({
  id,
  index,
  name,
}: {
  id: number;
  index: number;
  name: string;
}) {
  const [isEditShown, setIsEditShown] = useState(false);
  const { removeTeam } = useAppContext();

  return (
    <div>
      {isEditShown ? (
        <SettingsEditTeam
          id={id}
          name={name}
          onSave={() => setIsEditShown(false)}
          onCancel={() => setIsEditShown(false)}
        />
      ) : (
        <p className="mb-2 flex justify-between">
          <span>
            {index + 1}. {name}
          </span>
          <span className="flex gap-2">
            <EditIcon onClick={() => setIsEditShown(true)} />
            <RemoveIcon onClick={() => removeTeam(id)} />
          </span>
        </p>
      )}
    </div>
  );
}
