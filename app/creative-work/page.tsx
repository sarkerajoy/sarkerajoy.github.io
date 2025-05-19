"use client";

import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "RENAISSANCE",
    subtitle:
      "Mars Rover for University Rover Challenge (URC) 2022, USA & European Rover Challenge (ERC) 2022, Poland",
    image: "/erc.jpeg",
    description:
      "The ERC and URC are prestigious international competitions that challenge student teams to develop innovative robotic systems for space exploration. Team Interplanetar from BUET created their third-generation rover to compete globally.",
    problemSolution:
      "Develop a robust rover capable of autonomous science probing, maintenance tasks, and environmental interaction on Mars-like terrain. The rover features modular science payloads and advanced manipulator control with collision-free path planning.",
    contributions: [
      "Manufactured the rover’s main chassis.",
      "Designed a modular science module for the Science & Research sub-team.",
      "Led the Body Structure & Modularity sub-team.",
    ],
    achievements: [
      "8th place worldwide and 1st in Asia at ERC (Onsite) 2022, Poland.",
      "4th place worldwide at ERC (Remote) 2022.",
    ],
    technologies: ["CAD", "Finite Element Analysis", "Mechanical Design"],
    videos: ["https://www.youtube.com/embed/nkKy5N5KTOQ?start=4"],
  },
  {
    id: 2,
    title: "HILSHA BOT",
    subtitle: "Bio-inspired Robotic Fish for Deep-Sea Exploration",
    image: "/hilsha.jpg",
    description:
      "Inspired by the rapid expansion of oceanographic science, we developed Bangladesh’s first soft robotic fish mimicking natural fish locomotion for deep-sea surveillance.",
    problemSolution:
      "Surveyed real fish dimensions and designed the robot in SolidWorks. Developed a custom soft fluidic actuator manufactured in-house via injection molding using industrial-grade silicon. Created a buoyancy control unit with a custom linear actuator and sealing system for electrical components.",
    contributions: [
      "Designed the main body structure.",
      "Manufactured the negative mold for injection molding of the actuator.",
      "Built the spur gear system for the buoyancy control unit.",
      "Led media and outreach efforts.",
    ],
    currentFocus:
      "High-speed imaging of tail motion and further actuator improvements.",
    achievements: [
      "Successfully created Bangladesh’s first silicon-based soft robotic fish prototype.",
      "Performed performance tests to measure swimming efficiency.",
    ],
    technologies: ["Soft Robotics", "Bio-inspired Design", "Control Systems"],
    videos: ["https://www.youtube.com/embed/Rzq9v2fQp-0"],
    pdf: "/PROJECT%20HILSHA%20BOT.pdf",
    teamMembers: ["Emon Roy Bappy", "Ajoy Kumar Sarker", "Marifuzzaman Riad"],
  },
  {
    id: 3,
    title: "NIRVEEK V1.0",
    subtitle:
      "Concept Drone for International Planetary Aerial System (IPAS) Challenge 2021",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    description:
      "Designed a Mars-capable aerial drone to perform reconnaissance and exploration tasks under harsh extraterrestrial conditions.",
    problemSolution:
      "Selected optimal airfoil (CH10 smoothed) via XFLR5 and ANSYS simulations. Developed an intelligent thermal system using PET film insulation and a gas compression system to maintain Earth-like sensor conditions.",
    contributions: [
      "Conducted airfoil simulations and data analysis.",
      "Designed system architecture and control algorithms.",
    ],
    achievements: [
      "8th place globally.",
      "Innovation Award for Gas Compression System.",
    ],
    technologies: ["Aerodynamics", "Thermal Systems", "Control Systems"],
    videos: ["https://www.youtube.com/embed/hGI3iUrnFGs"],
  },
  {
    id: 4,
    title: "OPTIMIZATION OF NOZZLE CONTROL IN TRADITIONAL COOLING TOWER",
    subtitle: "Variable Water Flow Cooling Tower",
    image: "/cooling.jpg",
    description:
      "Developed a novel double-sheet nozzle system enabling variable water flow to improve cooling tower efficiency and conserve water resources.",
    problemSolution:
      "Conventional towers have fixed nozzle numbers and water flow, leading to inefficiency. The solution is a double-sheet mechanism where relative sheet position controls exposed nozzle area. A feedback control system automates nozzle flow adjustment based on load.",
    contributions: [
      "Designed and manufactured the nozzle system and tower.",
      "Developed feedback control system for motor operation.",
    ],
    futurePlans:
      "Implement variable fill height control and automatic mass flow rate control.",
    achievements: [
      "Innovated nozzle control mechanism for efficient water flow regulation.",
      "Integrated feedback system for automatic load adjustment.",
    ],
    technologies: ["Mechanical Design", "Electromechanics", "Control Systems"],
    teamMembers: ["Emon Roy Bappy", "Ajoy Kumar Sarker", "Marifuzzaman Riad"],
  },
];

export default function CreativeWorkPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <main className="min-h-screen bg-gray-900 text-gray-100 font-sans p-8 pt-20 flex justify-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide">
            My Projects
          </h1>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            {projectsData.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="cursor-pointer group relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                aria-label={`Open details for ${proj.title}`}
              >
                <div className="h-64 w-full relative bg-gray-800">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition duration-500"
                    style={{ aspectRatio: "3 / 4" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h2 className="text-lg font-semibold">{proj.title}</h2>
                    {proj.subtitle && (
                      <p className="text-xs text-gray-300 mt-1">{proj.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-6 z-50 cursor-pointer"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-xl p-6 relative cursor-default"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-100 transition text-2xl leading-none"
              aria-label="Close modal"
            >
              &#x2715;
            </button>

            <h2
              id="modal-title"
              className="text-3xl font-bold mb-2 border-b border-gray-700 pb-2"
            >
              {selectedProject.title}
            </h2>
            {selectedProject.subtitle && (
              <h3 className="text-sm text-gray-400 mb-4 italic">
                {selectedProject.subtitle}
              </h3>
            )}

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded mb-6"
              style={{ aspectRatio: "3 / 4" }}
            />

            <p id="modal-description" className="mb-4 text-justify">
              {selectedProject.description}
            </p>

            {selectedProject.problemSolution && (
              <>
                <h3 className="text-xl font-semibold mb-2">Problem & Solution</h3>
                <p className="mb-4 text-justify">{selectedProject.problemSolution}</p>
              </>
            )}

            {selectedProject.currentFocus && (
              <>
                <h3 className="text-xl font-semibold mb-2">Current Focus</h3>
                <p className="mb-4 text-justify">{selectedProject.currentFocus}</p>
              </>
            )}

            {selectedProject.futurePlans && (
              <>
                <h3 className="text-xl font-semibold mb-2">Future Plans</h3>
                <p className="mb-4 text-justify">{selectedProject.futurePlans}</p>
              </>
            )}

            {selectedProject.achievements && (
              <>
                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                <ul className="list-disc list-inside mb-6 space-y-1 text-justify">
                  {selectedProject.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedProject.contributions && (
              <>
                <h3 className="text-xl font-semibold mb-2">Contributions</h3>
                <ul className="list-disc list-inside mb-6 space-y-1 text-justify">
                  {selectedProject.contributions.map((contrib, i) => (
                    <li key={i}>{contrib}</li>
                  ))}
                </ul>
              </>
            )}
          {selectedProject.teamMembers && (
  <>
    <h3 className="text-xl font-semibold mb-2">Team Members</h3>
    <p className="mb-6 text-justify">
      {selectedProject.teamMembers.join(", ")}
    </p>
  </>
)}

            {selectedProject.technologies && (
              <>
                <h3 className="text-xl font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, i) => (
                    <button
                      key={i}
                      className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-sm text-white"
                      type="button"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </>
            )}

            {selectedProject.videos && selectedProject.videos.length > 0 && (
              <>
                <h3 className="text-xl font-semibold mb-2">Videos</h3>
                {selectedProject.videos.map((videoUrl, i) => (
                  <div key={i} className="mb-6 aspect-video w-full rounded overflow-hidden shadow-lg">
                    <iframe
                      className="w-full h-full"
                      src={videoUrl}
                      title={`Video ${i + 1} for ${selectedProject.title}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </>
            )}

            {selectedProject.pdf && (
              <>
                <h3 className="text-xl font-semibold mb-2">Download PDF</h3>
                <a
                  href={selectedProject.pdf}
                  download
                  className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition"
                  aria-label={`Download PDF for ${selectedProject.title}`}
                >
                  Download Project PDF
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
