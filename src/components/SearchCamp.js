import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";
import Button from "./Button";

function SearchCamp() {
  const auth = getAuth(app);
  const user = auth.currentUser;

  const [search, setSearch] = useState("");

  const onChange = (e) => setSearch(e.target.value);

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className=" font-Archivo rounded-lg bg-[#f9f6f1] my-2">
      <div className="px-9 py-14 w-[42%]">
        <h1 className="text-4xl font-[700]">Welcome to YelpCamp!</h1>
        <div className="text-[#5f5f5f] font-[400]">
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
            <Button type="submit" text="Search" />
          </form>
          <Link to={user !== null ? "addCampground" : "/Login"}>
            <div className="underline cursor-pointer">
              Or add your own campground
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchCamp;
