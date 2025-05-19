"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const researchProjects = [
  {
    title:
      "Analysis of Sintering Behavior and Thermal Properties of Tungsten-Copper Functionally Graded Materials",
    category: "Materials Science & Molecular Dynamics",
    description:
      "A comprehensive molecular dynamics study on the sintering behavior and thermal properties of Tungsten-Copper (W-Cu) Functionally Graded Materials (FGMs) fabricated using Spark Plasma Sintering (SPS). This research investigated how particle size affects the sintering process and resulting thermal properties, providing valuable insights for aerospace, nuclear, and defense sectors.",
    image: "/md.png",
    technologies: [
      "Molecular Dynamics",
      "LAMMPS",
      "Functionally Graded Materials",
      "Spark Plasma Sintering",
      "Thermal Analysis",
    ],
    findings: [
      "Thermal conductivity increases with particle size due to more extensive copper networks.",
      "Two-step change in gradient axis during sintering, driven by differing melting points.",
      "Smaller particles (20Å and 25Å) reach equilibrium faster during sintering.",
      "Significant amorphization of crystal structures due to inter-particle contacts.",
    ],
    collaborators: ["M. Abrar Muhit", "Ajoy Kumar Sarker"],
    supervisor: [
      "Dr. Md. Afsar Ali",
      "Professor & Department Head",
      "Department of Mechanical Engineering, BUET",
    ],
    methodology: [
      "Created custom interatomic potential files for W-Cu systems.",
      "Simulated spark plasma sintering with five stages.",
      "Uniaxial tensile testing to evaluate mechanical properties.",
      "Measured thermal conductivity and expansion coefficients.",
    ],
    publication: {
      title:
        'Muhit M Abrar, <span class="text-pink-400 font-semibold">Kumar Sarker Ajoy</span>, A. M. Afsar, “Analysis of Sintering Behavior and Thermal Properties of Tungsten-Copper Functionally Graded Materials: A Molecular Dynamics Study on Spark Plasma Sintering”, 9th BSME International Conference on Thermal Engineering (BSME ICTE), 2024',
    },
  },
]

export default function ResearchPage() {
  return (
    <div
      className="
        min-h-screen pt-24 pb-20
        max-w-7xl mx-auto px-8 sm:px-12 lg:px-16
        text-white font-sans
      "
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          text-5xl font-extrabold
          text-center mb-20
          tracking-tight
        "
      >
        Research Projects
      </motion.h1>

      {researchProjects.map((project, idx) => (
        <motion.article
          key={project.title}
          tabIndex={0}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.3, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileFocus={{ scale: 1.03 }}
          className="mb-20 flex flex-col md:flex-row gap-10"
        >
          {/* Image */}
          <figure className="md:w-1/3 overflow-hidden cursor-pointer">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="object-cover"
              priority
              quality={75}
            />
          </figure>

          {/* Content */}
          <div className="md:w-2/3 flex flex-col gap-8">
            <header>
              <h2
                className="
                  text-3xl font-extrabold mb-2
                  tracking-wide
                  cursor-pointer
                  transition-colors duration-300
                "
              >
                {project.title}
              </h2>
              <p className="italic text-sm">{project.category}</p>
            </header>

            <p className="text-lg leading-relaxed text-justify">
              {project.description}
            </p>

            <section>
  <h3 className="font-semibold text-xl mb-4">
    Technologies Used
  </h3>
  <div className="flex flex-wrap gap-3">
    {project.technologies.map((tech) => (
      <button
        key={tech}
        type="button"
        className="
          bg-purple-600 hover:bg-purple-700
          text-white font-semibold
          px-4 py-1 rounded-full
          transition-colors duration-300
          cursor-pointer
          select-none
          text-sm
        "
      >
        {tech}
      </button>
    ))}
  </div>
</section>

            <section>
              <h3 className="font-semibold text-xl mb-4">
                Key Findings
              </h3>
              <ul className="list-disc space-y-3 pl-6 text-justify text-base leading-relaxed">
                {project.findings.map((finding, i) => (
                  <li key={i}>{finding}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-4">
                Methodology
              </h3>
              <ul className="list-disc space-y-3 pl-6 text-justify text-base leading-relaxed">
                {project.methodology.map((method, i) => (
                  <li key={i}>{method}</li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-xl mb-2">Collaborators</h3>
                <p>{project.collaborators.join(", ")}</p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">Supervisor</h3>
                <p className="whitespace-pre-line">
                  {project.supervisor.join("\n")}
                </p>
              </div>
            </section>

            {project.publication && (
  <section>
    <h3 className="font-semibold text-xl mb-3">Publication</h3>
    <a
      href={project.publication.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-base font-semibold text-justify block"
      dangerouslySetInnerHTML={{ __html: project.publication.title }}
    />
  </section>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  )
}
