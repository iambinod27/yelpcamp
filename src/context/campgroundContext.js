import { createContext, useState } from "react";
import { campgrounds } from "../utils/campgrounds";

const CampgroundContext = createContext();

export const CampgroundProvider = ({ children }) => {
  const [camp, setCamp] = useState(campgrounds);

  return (
    <CampgroundContext.Provider value={{ camps: [camp, setCamp] }}>
      {children}
    </CampgroundContext.Provider>
  );
};

export default CampgroundContext;
