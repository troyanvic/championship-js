import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import Button from "../Button";
import HomeTitle from "../HomeTitle";

export default function HomeScreen() {
  const { onCreateChampionshipClick } = useAppContext();

  return (
    <section className="flex h-full flex-col items-center justify-between">
      <HomeTitle />
      <Button
        text="Create Championship"
        onClick={() =>
          onCreateChampionshipClick({
            isHomeShown: false,
            isSettingsShown: true,
          })
        }
      />
    </section>
  );
}
