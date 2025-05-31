import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import Button from "../Button";
import SettingsTeams from "../SettingsTeams/SettingsTeams.tsx";
import Title from "../Title";

export default function SettingsScreen() {
  const { onCreateChampionshipClick: onCreateChampionshipClickBack } =
    useAppContext();

  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        <Title title="Championship Settings" />
        <SettingsTeams />
      </div>

      <div>
        <Button
          text="Back"
          isOutlined
          onClick={() =>
            onCreateChampionshipClickBack({
              isHomeShown: true,
              isSettingsShown: false,
            })
          }
        />
        <Button text="Next" hasMargin onClick={() => console.log("next")} />
      </div>
    </section>
  );
}
