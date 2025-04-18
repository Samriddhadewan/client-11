import { format } from 'date-fns';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const PostDetail = () => {
  const job = useLoaderData();
  const { title,
    thumbnail,
    description,
    category,
    min_volunteer,
    deadline,
    organizer,_id } = job || {};
  console.log(job);
  return (
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
            Minimum Volunteer:{" "}
            <span className="text-gray-500 font-normal">{min_volunteer} Persons</span>
          </p>
          <p className="text-xl font-semibold">
            Last Donating Date:{" "}
            <span className="text-gray-500 font-normal">{format (new Date(deadline), "MM/dd/yyyy")}</span>
          </p>
          <p className=" font-semibold text-xl">
            Campaign Added By:{" "}
            <span className="text-gray-500 font-normal">{organizer?.name}</span>
          </p>
          <div>
            <div className=" bg-[#0E7A81] text-white p-4 rounded-lg flex flex-col items-center justify-center gap-2">
              <Link to={`/apply/${_id}`} className="text-2xl text-center font-semibold">
                Be a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail