import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebase.config";
import Button from "./Button";

export const ResetModal = ({ show, onClose, setShow }) => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);

      toast.success("Password reset email sent!");
      navigate("/Login");
      setShow(false);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <div
      className={`font-Archivo absolute top-24 left-8 md:top-32 md:left-20 lg:top-40 lg:left-96 rounded-md z-20 w-[80%] lg:w-[50%] h-[15rem]  lg:h-[18rem] bg-[#d6d6d6] none drop-shadow-xl ${
        show ? "absolute" : "hidden"
      }`}
    >
      <div className="p-5 lg:p-12">
        <div className="flex justify-end ">
          <GrFormClose className="h-8 w-8 cursor-pointer" onClick={onClose} />
        </div>
        <h1 className="font-bold text-xl lg:text-3xl">Reset Password</h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label className="text-[#5f5f5f] text-[0.9rem] lg:text-[1rem] py-2">
              Enter Email
            </label>
            <input
              className="p-2 lg:p-3 focus:outline-none rounded-md placeholder:text-[0.9rem] placeholder:lg:text-[1rem]"
              type="email"
              value={email}
              onChange={onChange}
              placeholder="sumikalama@example.com"
            />
          </div>
          <div className="flex justify-end py-2">
            <Button type="submit" text="Send" fad="my-2" />
          </div>
        </form>
      </div>
    </div>
  );
};
