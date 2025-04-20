import React from 'react';
import { Link } from 'react-router-dom';
const WhyVolunteer = () => {
    return (
      <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Why Volunteer With Us?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Make a real difference in your community by joining our mission. As a volunteer, you’ll:
          </p>
          <ul className="text-left text-gray-700 list-disc list-inside space-y-2 mb-8">
            <li>Gain hands-on experience</li>
            <li>Meet passionate people</li>
            <li>Support meaningful causes</li>
            <li>Develop valuable skills</li>
          </ul>
          <p className="text-gray-600 mb-6">
            Whether you can commit a few hours a week or just one event, <strong>your time matters</strong>. 
            Together, we can create lasting impact.
          </p>
          <Link to="/login"
            href="#volunteer-form"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            Become a Volunteer
          </Link>
        </div>
      </section>
    );
  };
  
  export default WhyVolunteer;
  