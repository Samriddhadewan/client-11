import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, handleUserLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    handleUserLogOut()
      .then(() => {
        console.log("User logged out successfully");
        toast.success("User logged out successfully");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  }

  const links = (
    <>
      <NavLink className="mr-2" to="/">Home</NavLink>
      <NavLink className="mr-2" to="/allVolunteerPost">All volunteer Need posts</NavLink>
      
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Voluntopia</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex gap-5">
        {user && user?.email ? (
          <div className="dropdown dropdown-hover dropdown-end">
            <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL ? user.photoURL : "https://placeimg.com/192/192/people"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-[-2] w-52 p-2 shadow"
            >
              <p className="text-center">{user?.displayName}</p>
              <button onClick={handleLogOut} className="btn">
                <li >Log out</li>
              </button>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        <div className="flex-none z-50">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>My Profile</summary>
                <ul className="bg-base-300  rounded-t-none p-2">
                  <Link className="bg-white" to="/needVolunteer"><li> Add Volunteer need Post</li></Link>
                  <Link className="bg-white" to="/manageMyPost"><li>Manage My Posts</li></Link>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
