import React, { useState } from "react";

import AppContext, { type AppProviderStore } from "../../context/AppContext";

export type CreateChampionshipType = {
  isHomeShown: boolean;
  isSettingsShown: boolean;
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
