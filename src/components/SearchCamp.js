import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Button from "./Button";

function SearchCamp() {
  const auth = getAuth(app);
  const user = auth.currentUser;

  const { loggedIn } = useAuthStatus();

  const [search, setSearch] = useState("");

  const onChange = (e) => setSearch(e.target.value);

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className=" font-Archivo rounded-lg bg-[#f9f6f1] my-2">
      <div className="px-5 py-7 lg:px-9 lg:py-14 lg:w-[42%]">
        <h1 className="text-3xl lg:text-4xl font-[700]">
          Welcome to YelpCamp!
        </h1>
        <div className="text-[#5f5f5f] text-[0.9rem] lg:text-[1rem] font-[400]">
          <p className="leading-6 ">
            View our hand-picked campgrounds from all over the world, or add
            your own.
          </p>
          <form className="py-2" onSubmit={onSubmit}>
            <input
              type="text"
              value={search}
              onChange={onChange}
              placeholder="Search for camp"
              className="p-[1rem] mr-4 focus:outline-none"
            />
            <Button type="submit" text="Search" fad="mt-2" />
          </form>
          <Link to={loggedIn && user !== null ? "addCampground" : "/Login"}>
            <div className="underline cursor-pointer text-[0.9rem] lg:text-[1rem]">
              Or add your own campground
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchCamp;
