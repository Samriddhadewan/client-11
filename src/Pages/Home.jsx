import React from 'react'
import Slider from '../Components/Slider'
import VolunteerNeedsNow from '../Components/VolunteerNeedsNow'
import WhyVolunteer from '../Components/WhyVolunteer'
import VolunteerOpportunities from '../Components/VolunteerOpportunities '

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <div className='max-w-[1320px] mx-auto mt-10'>
      <VolunteerNeedsNow></VolunteerNeedsNow>
      <WhyVolunteer></WhyVolunteer>
      <VolunteerOpportunities></VolunteerOpportunities>

      </div>
      
    </div>
  )
}

export default Home