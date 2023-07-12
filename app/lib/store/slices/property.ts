import { StateCreator } from "zustand";

export type Property = {
  id: number;
  address: string;
  image: string;
}

export interface IPropertySlice {
  properties: Array<Property>;
  getProperties: (token: string) => Promise<void>;
}

export const createPropertySlice: StateCreator<IPropertySlice> = (set) => ({
  properties: [],
  getProperties: async (token): Promise<void> => {
    const headers = {
      "Content-Type": "application/json",
      Cookie: `__session=${token}`,
    };
    const response = await fetch("/api/core/properties", { headers });
    const properties = await response.json();
    set({ properties });
  },
});
