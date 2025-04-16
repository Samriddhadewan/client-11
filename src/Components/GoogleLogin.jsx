import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const GoogleLogin = () => {
  const { handleLoginUserWithGoogle } = useContext(AuthContext);

  const HandleGoogleLogin = () => {
    handleLoginUserWithGoogle()
      .then((result) => {})
      .them((error) => {});
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
