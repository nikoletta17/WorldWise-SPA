import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

function useCities() {
  const contextValue = useContext(CitiesContext);
  if (contextValue === undefined)
    throw new Error("CityContext was used outside of the CityContext.Provider");
  return contextValue;
}

export { useCities };
