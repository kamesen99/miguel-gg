const WorkExperience = () => (
    <section className="work-experience-section py-20 px-10 md:px-32 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-gray-800">Work Experience</h2>
        <div className="mt-12">
          <div className="mb-8 p-6 rounded-lg shadow-md bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900">Chief Science Officer & Co-Founder at Exploration Laboratories</h3>
            <p className="text-sm text-gray-500">Feb 2023 - Present | Long Beach, California</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Responsible for mission formulation, space vehicle design, and manufacturing.</li>
              <li>Principal Investigator on a US Space Force R&D contract.</li>
            </ul>
          </div>
          <div className="mb-8 p-6 rounded-lg shadow-md bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900">Senior Systems Engineer at Boeing</h3>
            <p className="text-sm text-gray-500">Dec 2020 - Feb 2023 | Seal Beach, California</p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Supported multidisciplinary engineering for government defense programs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default WorkExperience;