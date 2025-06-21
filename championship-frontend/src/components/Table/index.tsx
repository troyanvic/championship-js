import { useAppContext } from "../../hooks/useAppContext.ts";
import Title from "../Title";

export default function Table() {
  const {
    store: { teams },
  } = useAppContext();

  return (
    <div className="mb-6">
      <Title title="Table" />

      <table className="table" data-theme="light">
        <thead>
          <tr>
            <th className="pr-2 pl-4 text-[12px]">#</th>
            <th className="px-2 text-[12px]">Team</th>
            <th className="px-2 text-center text-[12px]">Pl</th>
            <th className="px-2 text-center text-[12px]">W</th>
            <th className="px-2 text-center text-[12px]">D</th>
            <th className="px-2 text-center text-[12px]">L</th>
            <th className="px-2 text-center text-[12px]">GD</th>
            <th className="px-2 text-center text-[12px]">Pts</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => {
            const {
              id,
              name,
              played,
              won,
              drawn,
              lost,
              goalDifference,
              points,
            } = team;

            return (
              <tr key={id}>
                <td className="pr-2 pl-4">{index + 1}</td>
                <td className="px-2 font-bold">{name}</td>
                <td className="px-2 text-center">{played}</td>
                <td className="px-2 text-center">{won}</td>
                <td className="px-2 text-center">{drawn}</td>
                <td className="px-2 text-center">{lost}</td>
                <td className="px-2 text-center">{goalDifference}</td>
                <td className="px-2 text-center font-bold">{points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
