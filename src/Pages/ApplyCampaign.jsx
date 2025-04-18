import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const ApplyCampaign = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const [error, setError] = useState("");
  const {
    title,
    thumbnail,
    description,
    category,
    min_volunteer,
    deadline,
    location,
    organizer,
    _id,
  } = job || {};

  const handleRequest = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const suggestions = form.suggestions.value;
    const status = form.status.value;
    const requestData = {
      name,
      email,
      suggestions,
      status,
      postId: _id,
      organizer,
      title,
      category,
      location,
    };

    if (organizer?.email === user?.email) {
      return toast.error("You can't apply for your own campaign");
    }

    try {
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-request`, requestData,);
        form.reset();
        toast.success("Request sent successfully");
        console.log(data);
        navigate("/manageMyPost");
    } catch (error) {
        setError(error.message);
        console.log(error);
        toast.error(error.message);
    }


  };

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold mb-3">
        Be a Volunteer For the campaign
      </h1>
      <div className="min-h-[80vh] max-w-[1140px] mx-auto flex flex-col md:flex-row  gap-5  p-3">
        <div className=" rounded-lg flex-1">
          <img src={thumbnail} className="h-full object-cover" alt="" />
        </div>
        <div className="flex-1 flex p-4 items-center  rounded-lg">
          <div className="flex flex-col space-y-3">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <p className="text-base font-normal text-gray-500">
              <b className="text-black">Description:</b> {description}
            </p>
            <p className="text-xl font-semibold">
              Campaign Type:{" "}
              <span className="text-gray-500 font-normal"> {category}</span>
            </p>
            <p className="text-xl font-semibold">
              Location:{" "}
              <span className="text-gray-500 font-normal"> {location}</span>
            </p>
            <p className="text-xl font-semibold">
              Minimum Volunteer:{" "}
              <span className="text-gray-500 font-normal">
                {min_volunteer} Persons
              </span>
            </p>
            <p className="text-xl font-semibold">
              Last Donating Date:{" "}
              <span className="text-gray-500 font-normal">
                {format(new Date(deadline), "MM/dd/yyyy")}
              </span>
            </p>
            <p className=" font-semibold text-xl">
              Campaign Added By:{" "}
              <span className="text-gray-500 font-normal">
                {organizer?.name}
              </span>
            </p>
            <div className=" border mt-4 p-7 rounded-xl">
              <h1 className="text-2xl text-center font-semibold">
                Enter Your Informations here
              </h1>

              {/* form here  */}
              <form onSubmit={handleRequest} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="email"
                  name="name"
                  className="input w-full"
                  defaultValue={user?.displayName}
                  readOnly
                />
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  defaultValue={user?.email}
                  readOnly
                />
                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-700 " htmlFor="description">
                    Suggestions
                  </label>
                  <textarea
                    className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    name="suggestions"
                    id="description"
                    placeholder="You can write your suggestions here"
                    required
                  ></textarea>
                  <div className="flex flex-col gap-2 ">
                    <label className="text-gray-700 " htmlFor="category">
                      Status
                    </label>
                    <select
                      name="status"
                      id="category"
                      className="border p-2 rounded-md"
                      required
                    >
                      <option value="Requested">Requested</option>
                    </select>
                  </div>
                </div>
                {error && <p className="text-red-600">{error}</p>}
                <button className="btn btn-neutral mt-4">Request</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyCampaign;
