import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import SettingsFieldset from "../SettingsFieldset";
import Subtitle from "../Subtitle";

export default function SettingsGame() {
  const {
    store: {
      durations: { tournamentDuration, gameDuration, breakDuration },
    },
  } = useAppContext();

  const fields = [
    {
      type: "tournamentDuration",
      label: "Tournament duration",
      defaultValue: tournamentDuration,
      helpText: "Tournament duration in minutes. Default is 2 hours.",
      minValue: gameDuration,
    },
    {
      type: "gameDuration",
      label: "Game duration",
      defaultValue: gameDuration,
      helpText: "Game duration in minutes. Default is 5 minutes.",
      minValue: gameDuration,
    },
    {
      type: "breakDuration",
      label: "Break duration",
      defaultValue: breakDuration,
      helpText: "Break duration in minutes. Default is 1 minute.",
      minValue: breakDuration,
    },
  ];

  return (
    <>
      <Subtitle title="Configure game" />
      {fields.map((field, index) => (
        <SettingsFieldset key={index} {...field} />
      ))}
    </>
  );
}
