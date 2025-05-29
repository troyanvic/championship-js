import { createContext } from "react";

import { type CreateChampionshipType } from "../components/Provider";

export type AppProviderStore = {
  isHomeShown: boolean;
  isSettingsShown: boolean;
  isTournamentShown: boolean;
};

type AppContextType = {
  store: AppProviderStore;
  onCreateChampionshipClick: (obj: CreateChampionshipType) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
