import { useStore } from "../store";

const useDrawer = () => {
  return useStore((store) => ({
    children: store.children,
    formId: store.formId,
    initialFocusRef: store.initialFocusRef,
    isOpen: store.isOpen,
    onClose: store.onClose,
    onOpen: store.onOpen,
    onSubmit: store.onSubmit,
    title: store.title,

    setChildren: store.setChildren,
    setFormId: store.setFormId,
    setInitialFocusRef: store.setInitialFocusRef,
    setIsOpen: store.setIsOpen,
    setOnClose: store.setOnClose,
    setOnOpen: store.setOnOpen,
    setOnSubmit: store.setOnSubmit,
    setTitle: store.setTitle,
  }));
};

export default useDrawer;
