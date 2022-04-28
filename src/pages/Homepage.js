import CampgroundCard from "../components/CampgroundCard";
import SearchCamp from "../components/SearchCamp";

function Homepage() {
  return (
    <div className="w-[82%] mx-auto">
      <SearchCamp />

      <div className="grid grid-cols-autofill gap-7 py-10 ">
        {camps.map((camp) => {
          return <CampgroundCard camp={camp} key={camp.id} />;
        })}
      </div>
    </div>
  );
}

const camps = [
  {
    id: 1,
    title: "Mount Ulap",
    description:
      "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    image: "./Camp Images/Compressed Images/Mount Ulap.jpg",
  },

  {
    id: 2,
    title: "Calagus Islands",
    description:
      "A paradise of islands that can rival the white sand beauty of Boracay",
    image: "./Camp Images/Compressed Images/Calaguas Island.jpg",
  },

  {
    id: 3,
    title: "Onay Beach",
    description:
      "This is one of the best beach camping sites, beautiful and pristine.",
    image: "./Camp Images/Compressed Images/Onay Beach.jpg",
  },
  {
    id: 4,
    title: "Seven Sisters Waterfall",
    description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    image: "./Camp Images/Compressed Images/Seven Sisters Waterfall.jpg",
  },
  {
    id: 5,
    title: "Latik Riverside",
    description:
      "Phillipines is one of the most dazzling countries in all of Asia.",
    image: "./Camp Images/Compressed Images/Latik Riverside.jpg",
  },
  {
    id: 6,
    title: "Buloy Springs",
    description:
      "This is one of the best beach camping sites, beautiful and pristine.",
    image: "./Camp Images/Compressed Images/Buloy Springs.jpg",
  },
];

export default Homepage;
