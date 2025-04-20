// components/VolunteerOpportunities.jsx

import { Link } from "react-router-dom";

const VolunteerOpportunities = () => {
    const opportunities = [
      {
        title: "Community Outreach Coordinator",
        description: "Help spread awareness in local neighborhoods."
      },
      {
        title: "Event Organizer",
        description: "Assist in planning and running impactful events."
      },
      {
        title: "Social Media Volunteer",
        description: "Manage and grow our online presence."
      }
    ];
  
    return (
      <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">🧑‍🤝‍🧑 Current Volunteer Opportunities</h2>
          <p className="text-gray-600 mb-8 text-lg">
            We’re always looking for passionate individuals to join our team. Explore our current opportunities:
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-left transition hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{opportunity.title}</h3>
                <p className="text-gray-600">{opportunity.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-8">
            🌍 Opportunities available both <strong>online and offline</strong>.
          </p>
          <Link to="/allVolunteerPost"
            href="#open-roles"
            className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
          >
            View All Open Roles
          </Link>
        </div>
      </section>
    );
  };
  
  export default VolunteerOpportunities;
  