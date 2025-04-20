import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCards from "../Components/PostCards";

const AllVolunteerPost = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const postsPerPage = 6;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);
  console.log(numberOfPages);




  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts?search=${search}`
      );
      setPosts(data);
    };
    getData();
  }, [search]);


  console.log(search);

  return (
    <div>
      <div className="min-h-[80vh] max-w-7xl mx-auto my-7 ">
        {/* search bar here  */}
        <div className="flex justify-center items-center">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={(e)=> setSearch(e.target.value)} type="search" required placeholder="Search Campaigns here" />
        </label>
        </div>

        {/* cards section here  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
               posts?.length >0 ?  posts.map((post, idx)=> <PostCards key={idx} post={post}></PostCards>) :<div className="col-span-full text-center text-gray-500 text-xl font-semibold">
               No campaigns found
             </div>
            }
        </div>
      </div>



    </div>
  );
};

export default AllVolunteerPost;
