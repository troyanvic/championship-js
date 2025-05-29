import HomeTitle from "../HomeTitle";
import CreateChampionshipButton from "../CreateChampionshipButton";

export default function HomeScreen() {
  return (
    <section className="flex h-full flex-col items-center justify-between">
      <HomeTitle />
      <CreateChampionshipButton />
    </section>
  );
}
