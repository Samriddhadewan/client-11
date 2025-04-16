import React from 'react'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="card bg-base-100 w-full max-w-xl p-14 shrink-0 shadow-2xl">
          <form 
          // onSubmit={handleLoginUser}
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
          <button
            // onClick={handleGoogleLogin}
            className="border btn py-2 rounded-b-sm bg-[#4285F4]  text-white"
          >
            Continue With Google
          </button>
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