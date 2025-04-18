import React from 'react'

const VolunteerRequests = () => {
    const [posts, setPosts] = React.useState([]);

    if (posts.length === 0) {
        return <div className="text-center text-2xl font-semibold">No requests found</div>;
    }
  return (
    <div>VolunteerRequests</div>
  )
}

export default VolunteerRequests