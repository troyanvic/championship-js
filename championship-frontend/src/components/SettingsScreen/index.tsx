import { useState } from "react";
import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import Button from "../Button";
import SettingsGame from "../SettingsGame";
import SettingsTeams from "../SettingsTeams/SettingsTeams.tsx";
import Title from "../Title";

export default function SettingsScreen() {
  const [step, setStep] = useState(1);
  const {
    onCreateChampionshipClick: onCreateChampionshipClickBack,
    store: { teams },
  } = useAppContext();

  const handleBackClick = () => {
    if (step === 1) {
      onCreateChampionshipClickBack({
        isHomeShown: true,
        isSettingsShown: false,
      });
    }

    if (step === 2) {
      setStep(1);
    }
  };

  const handleNextClick = () => {
    setStep(2);
  };

  return (
    <section className="flex h-full flex-col justify-between">
      <div>
        <Title title="Championship Settings" />
        {step === 1 ? <SettingsTeams /> : <SettingsGame />}
      </div>

      <div>
        <Button text="Back" isOutlined onClick={handleBackClick} />
        <Button
          text="Next"
          hasMargin
          onClick={handleNextClick}
          isDisabled={teams.length < 2}
        />
      </div>
    </section>
  );
}
