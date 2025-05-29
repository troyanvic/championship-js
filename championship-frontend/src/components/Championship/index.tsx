import { type AppProviderStore } from "../../context/AppContext";
import { useAppContext } from "../../hooks/useAppContext";
import AppProvider from "../Provider";

// import components
import HomeScreen from "../HomeScreen";
import SettingsScreen from "../SettingsScreen";
import TournamentScreen from "../TournamentScreen";

export default function Championship() {
  const initialStore: AppProviderStore = {
    isHomeShown: true,
    isSettingsShown: false,
    isTournamentShown: false,
  };

  return (
    <AppProvider store={initialStore}>
      <ChampionshipContent />
    </AppProvider>
  );
}

function ChampionshipContent() {
  const { store } = useAppContext();

  console.log("ChampionshipContent store", store);

  return (
    <main className="bg-primary-content h-screen p-4 text-zinc-800">
      {store.isHomeShown && <HomeScreen />}
      {store.isSettingsShown && <SettingsScreen />}
      {store.isTournamentShown && <TournamentScreen />}
    </main>
  );
}
