import { StateCreator } from "zustand";

export type ContextMenuItem = {
  label: string;
  onClick: () => void;
};

export type ContextActionItem = {
  label: string;
  onClick: () => void;
};

export interface IApplicationSlice {
  context: string;
  contextMenu: Array<ContextMenuItem>;
  contextActions: Array<ContextActionItem>;
  setContext: (context: string) => void;
  setContextMenu: (contextMenu: Array<ContextMenuItem>) => void;
  setContextActions: (contextActions: Array<ContextActionItem>) => void;
};

export const createApplicationSlice: StateCreator<IApplicationSlice> = (set) => ({
  context: "",
  contextMenu: [],
  contextActions: [],
  setContext: (context: string) => set({ context }),
  setContextMenu: (contextMenu: Array<ContextMenuItem>) => set({ contextMenu }),
  setContextActions: (contextActions: Array<ContextActionItem>) => set({ contextActions }),
});
