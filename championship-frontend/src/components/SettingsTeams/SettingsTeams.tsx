import { type Team } from "../../context/AppContext";
import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import SettingsAddTeam from "../SettingsAddTeam";
import SettingsTeamItem from "../SettingsTeamItem";
import Subtitle from "../Subtitle";

export default function SettingsTeams() {
  const {
    store: { teams, isAddTeamFormShown },
    showTeamForm,
  } = useAppContext();

  return (
    <>
      <Subtitle title="Add teams" />

      {teams.length > 0 && (
        <div className="mt-2">
          {teams.map((team: Team, index: number) => (
            <SettingsTeamItem
              key={team.id}
              id={team.id}
              index={index}
              name={team.name}
            />
          ))}
        </div>
      )}

      {isAddTeamFormShown ? (
        <SettingsAddTeam />
      ) : (
        <button
          className="btn btn-link p-0 pt-2"
          type="button"
          onClick={() => {
            showTeamForm(true);
          }}
        >
          + Add new team
        </button>
      )}
    </>
  );
}
