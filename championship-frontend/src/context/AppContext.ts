import { createContext } from "react";

import { type CreateChampionshipType } from "../components/Provider";

export type Team = {
  readonly id: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
};

export type EditTeamType = {
  id: number;
  name: string;
};

export type Durations = {
  tournamentDuration: number;
  gameDuration: number;
  breakDuration: number;
};

export type AppProviderStore = {
  isHomeShown: boolean;
  isSettingsShown: boolean;
  isTournamentShown: boolean;
  isAddTeamFormShown: boolean;
  teams: Team[];
  durations: Durations;
};

type AppContextType = {
  store: AppProviderStore;
  onCreateChampionshipClick: (obj: CreateChampionshipType) => void;
  onAddTeamClick: (obj: Team) => void;
  showTeamForm: (payload: boolean) => void;
  editTeam: (obj: EditTeamType) => void;
  removeTeam: (id: number) => void;
  setDurations: (obj: { [p: string]: number }) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
