import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebase.config";
import Button from "./Button";
import Icon from "./Icon";

function Navbar() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged Out");
      navigate("/Home");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <div className="w-[82%] mx-auto py-5">
      <nav className="font-Archivo flex justify-between">
        <div className="flex items-center gap-6">
          <Icon name="Logo" className="w-[8rem] h-[4rem]" />
          <Link to="/Home">
            <h2 className="font-[600] text-[#3b3b3b]">Home</h2>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {user !== null ? (
            <>
              <h1 className="font-bold cursor-pointer">{user.displayName}</h1>
              <div>
                <p className="text-[#5f5f5f] cursor-pointer" onClick={logout}>
                  Logout
                </p>
              </div>
            </>
          ) : (
            <>
              <Link to="/Login">
                <p className="text-[#5f5f5f]">Login</p>
              </Link>
              <Link to="/SignUp">
                <Button text="Create an account" />
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
