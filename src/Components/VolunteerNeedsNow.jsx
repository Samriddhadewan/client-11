import axios from 'axios';
import React, { useEffect } from 'react'
import PostCards from './PostCards';

const VolunteerNeedsNow = () => {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/posts-up`);
        setPosts(data); 
    }




  return (
    <div className='max-w-[1320px] mx-auto mt-10'>
        <h1 className='text-center text-4xl font-semibold'>Volunteer Needs Now</h1>

        {/* cards section here  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {
               posts?.length >0 ?  posts.map((post, idx)=> <PostCards key={idx} post={post}></PostCards>) :<div className="col-span-full text-center text-gray-500 text-xl font-semibold">
               No campaigns found
             </div>
            }
        </div>

    </div>
  )
}

export default VolunteerNeedsNow