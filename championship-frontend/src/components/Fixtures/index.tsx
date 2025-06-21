import { useAppContext } from "../../hooks/useAppContext.ts";
import Title from "../Title";

export default function Fixtures() {
  const {
    store: { teams },
  } = useAppContext();

  return (
    <div>
      <Title title="Fixtures" />
      <div>
        <FixtureItem team1={teams[0].name} team2={teams[1].name} />
        <FixtureItem team1={teams[0].name} team2={teams[1].name} />
        <FixtureItem team1={teams[0].name} team2={teams[1].name} />
        <FixtureItem team1={teams[0].name} team2={teams[1].name} />
      </div>
    </div>
  );
}

function FixtureItem({ team1, team2 }: { team1: string; team2: string }) {
  return (
    <div
      className="bg-base-100 mb-5 flex h-[46px] items-center justify-center gap-2 rounded-lg"
      data-theme="light"
    >
      <FixtureItemTeam team={team1} />
      <div className="flex h-[38px] w-[120px] items-center justify-center gap-2">
        <FixtureItemScoreField />
        <span className="font-bold">-</span>
        <FixtureItemScoreField />
      </div>
      <FixtureItemTeam team={team2} />
    </div>
  );
}

function FixtureItemTeam({ team }: { team: string }) {
  return (
    <div className="flex justify-center">
      <span className="font-bold">{team}</span>
    </div>
  );
}

function FixtureItemScoreField() {
  return (
    <input
      className="h-8 w-10 rounded-sm border border-gray-200 text-center"
      type="number"
    />
  );
}
