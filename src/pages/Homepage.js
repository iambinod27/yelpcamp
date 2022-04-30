import { useContext } from "react";
import CampgroundCard from "../components/CampgroundCard";
import SearchCamp from "../components/SearchCamp";
import CampgroundContext from "../context/campgroundContext";

function Homepage() {
  const { camps } = useContext(CampgroundContext);
  const [camp, setCamp] = camps;

  return (
    <div className="w-[82%] mx-auto">
      <SearchCamp />

      <div className="grid grid-cols-autofill gap-7 py-10 ">
        {camp.map((camp) => {
          return <CampgroundCard camp={camp} key={camp.id} />;
        })}
      </div>
    </div>
  );
}

export default Homepage;
