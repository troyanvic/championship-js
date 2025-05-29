import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import Button from "../Button";
import Subtitle from "../Subtitle";
import Title from "../Title";

export default function SettingsScreen() {
  const { onCreateChampionshipClick: onCreateChampionshipClickBack } =
    useAppContext();

  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        <Title title="Championship Settings" />
        <Subtitle title="Add teams" />
      </div>

      <div>
        <Button
          text="Back"
          color="primary"
          isOutlined
          onClick={() =>
            onCreateChampionshipClickBack({
              isHomeShown: true,
              isSettingsShown: false,
            })
          }
        />
        <button
          className="btn btn-primary btn-xl mt-2 w-full"
          type="button"
          onClick={() => console.log("next")}
        >
          Next
        </button>
      </div>
    </section>
  );
}
