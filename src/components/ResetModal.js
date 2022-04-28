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
      className={`font-Archivo absolute top-40 left-96 rounded-md z-20  w-[50%] h-[18rem] bg-[#d6d6d6] none drop-shadow-xl ${
        show ? "absolute" : "hidden"
      }`}
    >
      <div className="p-12">
        <div className="flex justify-end ">
          <GrFormClose className="h-8 w-8 cursor-pointer" onClick={onClose} />
        </div>
        <h1 className="font-bold text-3xl">Reset Password</h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label className="text-[#5f5f5f] py-2">Enter Email</label>
            <input
              className="p-3 focus:outline-none rounded-md"
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
