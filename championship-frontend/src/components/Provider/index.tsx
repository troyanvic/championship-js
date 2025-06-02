import React, { useState } from "react";

import AppContext, {
  type AppProviderStore,
  type Durations,
} from "../../context/AppContext";

export type CreateChampionshipType = {
  isHomeShown: boolean;
  isSettingsShown: boolean;
};

export type AddTeamType = {
  id: number;
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

export default function AppProvider({
  store: initialStore,
  children,
}: {
  store: AppProviderStore;
  children: React.ReactNode;
}) {
  const [store, setStore] = useState<AppProviderStore>(initialStore);

  const value = {
    store,
    onCreateChampionshipClick: (obj: CreateChampionshipType) => {
      setStore((prevStore) => ({
        ...prevStore,
        isHomeShown: obj.isHomeShown,
        isSettingsShown: obj.isSettingsShown,
      }));
    },
    onAddTeamClick: (obj: AddTeamType) => {
      setStore((prevStore) => ({
        ...prevStore,
        teams: [...prevStore.teams, obj],
      }));
    },
    showTeamForm: (payload: boolean) => {
      setStore((prevStore) => ({
        ...prevStore,
        isAddTeamFormShown: payload,
      }));
    },
    editTeam: (obj: { id: number; name: string }) => {
      setStore((prevStore) => ({
        ...prevStore,
        teams: prevStore.teams.map((team) =>
          team.id === obj.id
            ? {
                ...team,
                name: obj.name,
              }
            : team,
        ),
      }));
    },
    removeTeam: (id: number) => {
      setStore((prevStore) => ({
        ...prevStore,
        teams: prevStore.teams.filter((team) => team.id !== id),
      }));
    },
    setDurations: (obj: { [p: string]: number }) => {
      setStore((prevStore) => ({
        ...prevStore,
        durations: obj as Durations,
      }));
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
