import { useStore } from "../store";

const useApplication = () => {
  return useStore((store) => ({
    context: store.context,
    contextMenu: store.contextMenu,
    contextActions: store.contextActions,
    setContext: store.setContext,
    setContextMenu: store.setContextMenu,
    setContextActions: store.setContextActions,
  }));
};

export default useApplication;
