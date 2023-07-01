import { useStore } from "../store";

const useTheme = () => {
  return useStore((store) => ({
    isDarkMode: store.isDarkMode,
    toggleTheme: store.toggleTheme,
  }));
};

export default useTheme;
