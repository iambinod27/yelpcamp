import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebase.config";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Button from "./Button";
import Icon from "./Icon";
import Spinner from "./Spinner";

function Navbar() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const { loggedIn, checkingStatus } = useAuthStatus();

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged Out");
      navigate("/Home");
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  const onShow = () => {
    return !show ? setShow(true) : setShow(false);
  };

  return (
    <div className="w-[88%] lg:w-[82%] mx-auto py-5">
      <nav className="font-Archivo flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Icon name="Logo" className="w-[8rem] h-[4rem]" />
          <Link to="/Home">
            <h2 className="font-[600] lg:block hidden text-[#3b3b3b]">Home</h2>
          </Link>
        </div>

        <div
          className=" lg:hidden border p-1 relative border-slate-300 bg-[#f3f3f3] rounded-md"
          onClick={onShow}
        >
          <Icon name="Hamburger Menu" className="h-[2rem] w-[2rem]" />

          <div
            className={`absolute h-[15rem] ${
              show ? "absolute" : "hidden"
            } right-0 top-12 w-[18rem] rounded-md bg-[#585858] lg:hidden`}
          >
            <div className="p-5 flex flex-col">
              <Link to="/Login" className="border-b border-slate-400 mb-4 p-2">
                <p className="text-[#ffffff]">Login</p>
              </Link>
              <Link to="/SignUp" className="border-b border-slate-400 mb-4 p-2">
                <p className="text-[#ffffff]">Create an Account</p>
              </Link>
            </div>
          </div>
        </div>
        {!checkingStatus ? (
          <div className="lg:flex items-center hidden gap-5">
            {loggedIn && user !== null ? (
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
        ) : (
          <Spinner fab="hidden lg:block" />
        )}
      </nav>
    </div>
  );
}

export default Navbar;
