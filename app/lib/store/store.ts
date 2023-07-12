import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";

import { createApplicationSlice, IApplicationSlice } from "./slices/application";
import { createDrawerSlice, IDrawerSlice } from "./slices/drawer";
import { createPropertySlice, IPropertySlice } from "./slices/property";
import { createThemeSlice, IThemeSlice } from "./slices/theme";

interface IStore extends
  IApplicationSlice,
  IDrawerSlice,
  IPropertySlice,
  IThemeSlice
{};

const getDefaultInitialState = () => ({});

export type StoreType = ReturnType<typeof initializeStore>;

const appContext = createContext<StoreType | null>(null);

export const { Provider } = appContext;

export const useStore = <T>(selector: (state: IStore) => T) => {
  const store = useContext(appContext);

  if (!store) {
    throw new Error("Store is missing the provider");
  }

  return useZustandStore(store, selector);
};

// TODO: use persist from zustand to save to local storage
export const initializeStore = (
  preloadedState: Partial<IStore> = {}
) => {
  return createStore<IStore>((set, get, api) => ({
      ...getDefaultInitialState(),
      ...preloadedState,
      ...createApplicationSlice(set, get, api),
      ...createDrawerSlice(set, get, api),
      ...createPropertySlice(set, get, api),
      ...createThemeSlice(set, get, api),
    })
  );
};
