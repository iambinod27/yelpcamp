import { Link } from "react-router-dom";
import HeroImage from "../Assets/Hero Image.jpg";
import Button from "../components/Button";
import Icon from "../components/Icon";

function Landing() {
  return (
    <div className="grid grid-cols-12 font-Archivo">
      <div className="col-start-1 col-end-7">
        <div className="w-[60%] mx-auto">
          <nav>
            <Icon name="Logo" className="w-[10rem] h-[5rem]" />
          </nav>
          <div className="py-10">
            <h1 className="text-5xl font-[800] ">
              Explore the best camps on Earth.
            </h1>
            <p className="text-[#5f5f5f] py-3 leading-6">
              YelpCamp is a curated list of the best camping spots on Earth.
              Unfiltered and unbiased reviews
            </p>
            <ul>
              {checkmarks.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center py-2 text-[#5f5f5f]"
                  >
                    <Icon
                      name="Checkmark"
                      className="w-[2rem] h-[1.8rem] mr-2"
                    />
                    {item.text}
                  </li>
                );
              })}
            </ul>
            <Link to="/Home">
              <Button text="View Campground" fad="my-3" />
            </Link>
            <div>
              <p>Partnered with :</p>
              <ul className="flex items-center">
                {["Airbnb", "Booking", "Plum Guide"].map((item, index) => {
                  return (
                    <li key={index}>
                      <Icon name={item} className="w-[8rem] h-[3rem]" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-8 col-end-13">
        <img src={HeroImage} alt="Images" className="w-full object-cover" />
      </div>
    </div>
  );
}

const checkmarks = [
  {
    id: 1,
    text: "Add your own camp suggestions",
  },
  {
    id: 2,
    text: "Leave reviews and experieces.",
  },
  {
    id: 3,
    text: "See Locations for all camps",
  },
];

export default Landing;
