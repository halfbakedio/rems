import { useStore } from "../store";

const useProperties = () => {
  return useStore((store) => ({
    properties: store.properties,
    getProperties: store.getProperties,
  }));
};

export default useProperties;
