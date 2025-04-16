import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthProvider';
import GoogleLogin from '../Components/GoogleLogin';
const Login = () => {
  const {HandleUserLogin} = useContext(AuthContext)
  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    HandleUserLogin(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-xl p-14 shrink-0 shadow-2xl">
          <form 
          onSubmit={handleLoginUser}
           className="">
            <h1 className="text-4xl text-center font-bold">Login Now</h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              <button className="btn bg-[#0E7A81] text-white mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <GoogleLogin></GoogleLogin>
          <h1 className="pt-4">
            Don't have an Account?{" "}
            <Link className="underline text-blue-800" to="/register">
              Register now
            </Link>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Login