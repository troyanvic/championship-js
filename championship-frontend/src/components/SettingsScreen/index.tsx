import { useEffect, useState } from "react";
import { useAppContext } from "../../hooks/useAppContext.ts";

// import components
import Button from "../Button";
import SettingsGame from "../SettingsGame";
import SettingsTeams from "../SettingsTeams/SettingsTeams.tsx";
import Title from "../Title";

export default function SettingsScreen() {
  const [step, setStep] = useState(1);
  const [buttonText, setButtonText] = useState("Next");
  const [isDisabled, setIsDisabled] = useState(true);
  const {
    onCreateChampionshipClick: onCreateChampionshipClickBack,
    onGenerateTournamentClick,
    store: { teams, durations },
  } = useAppContext();

  useEffect(() => {
    if (step === 1) {
      setIsDisabled(teams.length < 2);
    }

    if (step === 2) {
      const { tournamentDuration, gameDuration, breakDuration } = durations;

      if (
        tournamentDuration < gameDuration ||
        tournamentDuration < 5 ||
        gameDuration < 5 ||
        breakDuration < 1
      ) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    }
  });

  const handleBackClick = () => {
    if (step === 1) {
      onCreateChampionshipClickBack({
        isHomeShown: true,
        isSettingsShown: false,
      });
    }

    if (step === 2) {
      setStep(1);
      setButtonText("Next");
    }
  };

  const handleNextClick = () => {
    if (step === 1) {
      setIsDisabled(teams.length < 2);
      setStep(2);
      setButtonText("Generate");
    }

    if (step === 2) {
      onGenerateTournamentClick({
        isHomeShown: false,
        isSettingsShown: false,
        isTournamentShown: true,
      });
    }
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
          text={buttonText}
          hasMargin
          onClick={handleNextClick}
          isDisabled={isDisabled}
        />
      </div>
    </section>
  );
}
