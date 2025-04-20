import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import VolunteerNeedPosts from '../Components/VolunteerNeedPosts';
import VolunteerRequests from '../Components/VolunteerRequests';


const ManageMyPost = () => {
  return (
   <div className='w-[1120px] min-h-[80vh] mx-auto mt-10'>
     <Tabs>
    <TabList className='text-center mb-4 border-b-2 border-gray-300'>   
      <Tab>My volunteer need posts
      </Tab>
      <Tab>My Volunteer Request Post
      </Tab>
    </TabList>

    <TabPanel>
      <VolunteerNeedPosts/>
    </TabPanel>
    <TabPanel>
      <VolunteerRequests>  
      </VolunteerRequests>
    </TabPanel>
  </Tabs>
   </div>
  )
}

export default ManageMyPost
