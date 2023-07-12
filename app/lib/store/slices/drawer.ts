import { StateCreator } from "zustand";
import { ReactNode, RefObject } from "react";

export interface IDrawerSlice {
  children: ReactNode;
  formId: string;
  initialFocusRef: RefObject<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onSubmit: () => void;
  title: string;

  setChildren: (children: ReactNode) => void;
  setFormId: (formId: string) => void;
  setInitialFocusRef: (ref: RefObject<HTMLElement>) => void;
  setIsOpen: (isOpen: boolean) => void;
  setOnClose: (onClose: () => void) => void;
  setOnOpen: (onOpen: () => void) => void;
  setOnSubmit: (onSubmit: () => void) => void;
  setTitle: (title: string) => void;
}

export const createDrawerSlice: StateCreator<IDrawerSlice> = (set) => ({
  children: undefined,
  formId: "drawer-form",
  initialFocusRef: undefined,
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  onSubmit: () => set({ isOpen: false }),
  title: undefined,

  setChildren: (children) => set({ children }),
  setFormId: (formId) => set({ formId }),
  setInitialFocusRef: (ref) => set({ initialFocusRef: ref }),
  setIsOpen: (isOpen) => set({ isOpen }),
  setOnClose: (onClose) => set({ onClose }),
  setOnOpen: (onOpen) => set({ onOpen }),
  setOnSubmit: (onSubmit) => set({ onSubmit }),
  setTitle: (title) => set({ title }),
});
