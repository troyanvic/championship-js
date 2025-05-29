import { useState } from "react";
import AppProvider, { type AppProviderStore } from "../Provider";

// import components
import HomeScreen from "../HomeScreen";
import SettingsScreen from "../SettingsScreen";
import TournamentScreen from "../TournamentScreen";

export default function Championship() {
  const [store] = useState<AppProviderStore>({
    isTournamentShown: false,
    isHomeScreenShown: true,
    isSettingsShown: false,
  });

  return (
    <AppProvider store={store}>
      <main className="bg-primary-content h-screen p-4 text-zinc-800">
        {store.isHomeScreenShown && <HomeScreen />}
        {store.isSettingsShown && <SettingsScreen />}
        {store.isTournamentShown && <TournamentScreen />}
      </main>
    </AppProvider>
  );
}
