import { useContext, useState } from "react";
import Button from "../components/Button";
import CampgroundContext from "../context/campgroundContext";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth";
import { app } from "../firebase.config";
import { useNavigate } from "react-router-dom";

function AddCampground() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: "",
    price: "",
    image: "",
    description: "",
    comments: [],
    user: user.displayName,
  });

  const { title, price, image, description } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const { camps } = useContext(CampgroundContext);
  const [camp, setCamp] = camps;

  const onSubmit = (e) => {
    e.preventDefault();

    setCamp((prevItem) => [...prevItem, formData]);
    setFormData({
      title: "",
      price: "",
      description: "",
      image: "",
    });
    navigate("/Home");
  };

  console.log(camp);

  return (
    <>
      <div className="w-[50%] mx-auto font-Archivo py-5">
        <h1 className="text-4xl font-bold pb-4">Add New Campground</h1>

        <form onSubmit={onSubmit}>
          <div className="flex flex-col py-3">
            <label className="mb-1">Campground Name</label>
            <input
              type="text"
              id="title"
              className="border rounded-md p-3  focus:outline-none"
              value={title}
              onChange={onChange}
              placeholder="Mt Everest"
            />
          </div>

          <div className="flex flex-col py-3">
            <label className="mb-1">Price</label>
            <input
              type="number"
              id="price"
              className="border rounded-md p-3  focus:outline-none"
              value={price}
              onChange={onChange}
              placeholder="$149"
            />
          </div>

          <div className="flex flex-col py-3">
            <label className="mb-1">Image</label>
            <input
              type="text"
              id="image"
              className="border rounded-md p-3  focus:outline-none"
              value={image}
              onChange={onChange}
              placeholder="https://images.pexels.com/photos/1752806/"
            />
          </div>

          <div className="flex flex-col">
            <label>Description</label>
            <textarea
              onChange={onChange}
              value={description}
              id="description"
              cols="33"
              rows="10"
              className="resize-none p-3 border rounded-md focus:outline-none"
              placeholder="Mount Everest is the highest of the Himalayan mountains, and—at 8,849 meters (29,032 feet)—is considered the highest point on Earth. illness caused by reduced oxygen levels at high elevations. large mass of snow and other material suddenly and quickly tumbling down a mountain. art and science of making maps"
            ></textarea>
          </div>

          <Button text="Add Campground" type="submit" fad="w-full my-5" />
        </form>
      </div>
    </>
  );
}

export default AddCampground;
