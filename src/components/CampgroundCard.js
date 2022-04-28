import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function CampgroundCard({ camp }) {
  return (
    <>
      <div className="font-Archivo border border-slate-300 p-3 rounded-md">
        <div className="">
          <img
            src={camp.image}
            alt={camp.title}
            className="object-cover rounded-md w-[20rem]"
          />
          <div className="flex flex-col py-2">
            <h2 className="font-bold text-[1rem]">{camp.title}</h2>
            <p className="py-2 text-[#5f5f5f]">{camp.description}</p>
            <Link to={`campDetail/:${camp.id}`}>
              <Button
                fad="bg-white text-black border border-slate-300 font-bold w-full "
                text="View Campground"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampgroundCard;