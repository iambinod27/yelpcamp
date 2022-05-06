import { Link } from "react-router-dom";
import HeroImage from "../Assets/Hero Image.jpg";
import Button from "../components/Button";
import Icon from "../components/Icon";

function Landing() {
  return (
    <>
      <nav className="px-4 lg:hidden">
        <Icon
          name="Logo"
          className="w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[5rem]"
        />
      </nav>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 font-Archivo">
        <div className="lg:col-start-1 lg:col-end-7">
          <div className="w-[85%] lg:w-[60%] mx-auto">
            <nav className="hidden lg:block">
              <Icon name="Logo" className="w-[10rem]  h-[5rem]" />
            </nav>
            <div className="py-5 lg:py-10">
              <h1 className="text-2xl lg:text-5xl font-[800] ">
                Explore the best camps on Earth.
              </h1>
              <p className="text-[0.9rem] lg:text-[1rem] text-[#5f5f5f] py-3 leading-6">
                YelpCamp is a curated list of the best camping spots on Earth.
                Unfiltered and unbiased reviews
              </p>
              <ul>
                {checkmarks.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="flex items-center py-2 text-[0.9rem] lg:text-[1rem] text-[#5f5f5f]"
                    >
                      <Icon
                        name="Checkmark"
                        className="w-[1.3rem] h-[1.3rem] lg:w-[2rem] lg:h-[2rem] mr-2"
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
                <p className="text-[0.9rem] lg:text-[1rem]">Partnered with :</p>
                <ul className="flex items-center">
                  {["Airbnb", "Booking", "Plum Guide"].map((item, index) => {
                    return (
                      <li key={index}>
                        <Icon
                          name={item}
                          className="w-[5.5rem] h-[2.2rem]  lg:w-[8rem] lg:h-[3rem]"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-start-8 lg:col-end-13">
          <img
            src={HeroImage}
            alt="Images"
            className="w-full h-[20rem] lg:h-full object-cover"
          />
        </div>
      </div>
    </>
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
