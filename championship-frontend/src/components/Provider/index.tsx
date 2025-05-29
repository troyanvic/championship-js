import React, { createContext } from "react";

export type AppProviderStore = {
  isTournamentShown: boolean;
  isHomeScreenShown: boolean;
  isSettingsShown: boolean;
};

type AppContextType = {
  store: AppProviderStore;
};

const AppContext = createContext<AppContextType | null>(null);

export default function Index({
  store,
  children,
}: {
  store: AppProviderStore;
  children: React.ReactNode;
}) {
  const value = {
    store,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
