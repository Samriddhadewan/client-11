import React from "react";
import { Link } from "react-router-dom";

const PostCards = ({ post }) => {
  const {
    _id,
    title,
    thumbnail,
    location,
    min_volunteer,
    deadline,
    category,
    request_count,
  } = post || {};

  return (
    <Link to={`/job/${_id}`} className="card p-3 bg-base-100 w-96 shadow-sm">
      <figure>
        <img className="rounded-lg h-[220px] object-cover" src={thumbnail} alt="Thumbnail" />
      </figure>
      <div className="py-2 my-2  flex flex-col ">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            Deadline:{new Date(deadline).toLocaleDateString()}
          </span>
          <span className="px-2 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">
            {category}
          </span>
        </div>
        <h2 className="text-xl mt-1 font-bold">{title}</h2>
        <p className="text-base text-gray-700 my-2">Location: {location}</p>
        <p className="text-base text-gray-700 ">Minimum Volunteer: {min_volunteer}</p>
        <p className="text-base text-gray-700 my-2">Total Requests : {request_count}</p>
      </div>
    </Link>
  );
};

export default PostCards;
