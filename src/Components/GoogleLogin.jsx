import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { handleLoginUserWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/"
  const HandleGoogleLogin = async() => {
    try {
      await handleLoginUserWithGoogle();
      toast.success("Login Successfull")
      navigate(form, { replace: true });  
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <div className="divider my-1">OR</div>

      <button className="btn bg-[#4285F4] text-white w-full" onClick={HandleGoogleLogin}>
        GoogleLogin
      </button>
    </div>
  );
};

export default GoogleLogin;
