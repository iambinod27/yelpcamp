import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../../components/Icon";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../../components/Button";
import userTest from "../../Assets/icons/User Testimonial.svg";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import { app } from "../../firebase.config";
import { ResetModal } from "../../components/ResetModal";

function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (location.pathname === "/SignUp") {
      try {
        const auth = getAuth(app);

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        await userCredential.user;

        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        navigate("/Home");
        toast.success("Welcome to YelpCamp!!");
      } catch (error) {
        toast.error(`${error}`);
      }
    } else {
      try {
        const auth = getAuth(app);

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (userCredential.user) {
          navigate("/Home");
          toast.success("Welcome to Back!!");
        } else {
          toast.error("Wrong password");
        }
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };

  const openModal = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <div className="lg:grid lg:grid-cols-12 font-Archivo relative">
      <div className="lg:col-start-1 lg:col-end-8">
        <div className="w-[88%] lg:w-[70%] mx-auto">
          <nav className="flex items-center justify-between">
            <Icon
              name="Logo"
              className="w-[5rem] h-[4rem] lg:w-[10rem] lg:h-[5rem]"
            />
            <Link
              to="/Home"
              className="hover:underline text-[#5f5f5f] text-[0.9rem] lg:text-[1rem] flex items-center"
            >
              <BsArrowLeft className="mr-1 lg:mr-3" />
              Back to Campgrounds
            </Link>
          </nav>

          <div className="py-4 lg:py-10">
            <h1 className="font-[800] text-2xl lg:text-4xl">
              Start exploring camps from all around the world.
            </h1>
            <form className="flex flex-col" onSubmit={onSubmit}>
              {location.pathname === "/SignUp" && (
                <div className="flex flex-col py-4">
                  <label className="text-[0.9rem] lg:text-[1rem]   text-[#5f5f5f]">
                    Name
                  </label>
                  <input
                    type="name"
                    placeholder="Sumika Lama"
                    id="name"
                    value={name}
                    onChange={onChange}
                    className="bg-[#eeeeee] p-4  focus:outline-none rounded-md mt-2 placeholder:text-[0.9rem] placeholder:lg:text-[1rem]"
                  />
                </div>
              )}

              <div className="flex flex-col py-4">
                <label className="text-[#5f5f5f] text-[0.9rem] lg:text-[1rem] ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="sumikalama@example.com"
                  id="email"
                  value={email}
                  onChange={onChange}
                  className="bg-[#eeeeee] p-4 focus:outline-none rounded-md mt-2 placeholder:text-[0.9rem] placeholder:lg:text-[1rem]"
                />
              </div>

              <div className="flex flex-col py-3">
                <label className="text-[#5f5f5f] text-[0.9rem] lg:text-[1rem]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                  placeholder={
                    location.pathname === "/Login"
                      ? "Enter Your Password"
                      : "Choose Password"
                  }
                  className="bg-[#eeeeee] p-4 focus:outline-none rounded-md mt-2 placeholder:text-[0.9rem] placeholder:lg:text-[1rem]"
                />
              </div>

              {location.pathname === "/Login" && (
                <div className="flex justify-end py-3">
                  <p
                    onClick={openModal}
                    className="hover:underline font-bold cursor-pointer text-[0.9rem] lg:text-[1rem]"
                  >
                    Forgot Password?
                  </p>
                </div>
              )}

              <Button
                text={
                  location.pathname === "/Login" ? "Login" : "Create an account"
                }
                type="submit"
                fad="font-bold my-3"
              />
            </form>

            <ResetModal show={show} onClose={onClose} setShow={setShow} />

            {location.pathname === "/Login" ? (
              <p className="text-[0.9rem] lg:text-[1rem]">
                Not a user yet?
                <Link to="/SignUp" className="ml-1 underline font-bold">
                  Create an account
                </Link>
              </p>
            ) : (
              <p className="text-[0.9rem] lg:text-[1rem]">
                Already a user?
                <Link to="/Login" className="ml-1 underline font-bold">
                  Sign In
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-start-8 lg:col-end-13 bg-[#f9f6f1] lg:min-h-screen">
        <div className="flex flex-col py-5 lg:py-0 justify-center items-start h-[100%] gap-5 w-[88%] lg:w-[55%] mx-auto">
          <h1 className="text-lg lg:text-2xl font-[800] pt-6 lg:pt-0">
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added."
          </h1>
          <div className="flex items-center gap-3 pb-4 lg:pb-0">
            <img src={userTest} alt="user" className="w-[2rem] lg:w-[4rem]" />
            <div className="text-[0.8rem] lg:text-[1rem]">
              <h3 className="font-bold">May Andrews</h3>
              <p>Professional Hiker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
