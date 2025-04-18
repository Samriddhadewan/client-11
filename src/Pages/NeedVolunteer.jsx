import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const NeedVolunteer = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const category = form.category.value;
    const description = form.description.value;
    const location = form.location.value;
    const min_volunteer = parseInt(form.min_volunteer.value);
    const deadline = startDate;
    const organizer = {
      name: form.organizer_name.value,
      email: form.organizer_email.value,
    };
    const request_count = 0;
    const postData = {
      title,
      thumbnail,
      description,
      category,
      location,
      min_volunteer,
      deadline,
      organizer,
      request_count,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-post`,
        postData
      );
      console.log(data);
      toast.success("Volunteer Campaign Created Successfully");
      form.reset();
      navigate("/manageMyPost");  
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="min-h-[80vh] flex my-7 justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl p-14 shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="">
            <h1 className="text-4xl mb-4 text-center font-bold">
              Create New Volunteer Campaign
            </h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Thumbnail</label>
              <input
                type="text"
                name="thumbnail"
                className="input w-full"
                placeholder="Upload thumbnail"
                required
              />
              <label className="fieldset-label">Post Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Enter the name of Campaign"
                required
              />
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="border p-2 rounded-md"
                  required
                >
                  <option value="HealthCare">HealthCare</option>
                  <option value="Education">Education</option>
                  <option value="Social service">Social service</option>
                  <option value="Animal welfare">Animal welfare</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="description">
                  Description
                </label>
                <textarea
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  name="description"
                  id="description"
                  required
                ></textarea>
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="max_price">
                  Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="Location"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="max_price">
                  Minimum Volunteer
                </label>
                <input
                  required
                  id="min_volunteer"
                  name="min_volunteer"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              {/* pick a date section  */}
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>

                {/* Date Picker Input Field */}
                <DatePicker
                  required
                  className=" p-2 rounded-md w-full border"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="max_price">
                  Organizer name
                </label>
                <input
                  id="organizer_name"
                  name="organizer_name"
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="max_price">
                  Organizer email
                </label>
                <input
                  id="organizer_email"
                  name="organizer_email"
                  type="text"
                  defaultValue={user?.email}
                  readOnly
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <button className="btn bg-[#0E7A81] text-white mt-4">Post</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NeedVolunteer;
