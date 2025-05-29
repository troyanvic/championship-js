import { useAppContext } from "../../hooks/useAppContext.ts";

export default function CreateChampionshipButton() {
  const { onCreateChampionshipClick } = useAppContext();

  return (
    <button
      className="btn btn-primary btn-xl w-full"
      type="button"
      onClick={() =>
        onCreateChampionshipClick({ isHomeShown: false, isSettingsShown: true })
      }
    >
      Create Championship
    </button>
  );
}
