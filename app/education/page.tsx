import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";
import Image from "next/image";

export default function EducationPage() {
  const education = [
    {
      degree: "PhD in Aerospace Engineering",
      institution: "University of Central Florida",
      location: "Orlando, Florida, USA",
      period: "2025 - Continued",
      description:
        "Currently pursuing doctoral studies in Aerospace Engineering with a focus on advanced materials and computational mechanics. Awarded the prestigious ORCGS Doctoral Fellowship.",
      achievements: [
        "ORCGS Doctoral Fellowship recipient",
        "Research at the Computational Mechanics and Structures Laboratory (CMSL)",
      ],
      links: [
        {
          name: "CMSL Lab Website",
          url: "https://mae.ucf.edu/CMSL/",
        },
      ],
      logo: "/ucf.jpeg",
    },
    {
      degree: "Bachelor of Science in Mechanical Engineering",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      location: "Dhaka, Bangladesh",
      cgpa: "3.42 (3.46 after WES evaluation)",
      period: "2019 - 2024",
      description:
        "Completed undergraduate studies with a focus on mechanical design, materials science, and manufacturing processes. Participated in various engineering competitions and research projects.",
      achievements: [
        "Member of BUET Mars Rover Team",
        "Research on Functionally Graded Materials",
        "Academic Excellence",
      ],
      courses: ["Advanced Materials", "Mechanical Design", "Manufacturing Processes", "Finite Element Analysis"],
      logo: "/buet.png",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Notre Dame College",
      location: "Dhaka, Bangladesh",
      period: "2016 - 2018",
      description: "Completed higher secondary education with a focus on science and mathematics.",
      achievements: ["Excellent academic performance", "Participation in science competitions"],
      logo: "/ndc.jpeg",
    },
  ];

  return (
    <div className="min-h-screen pt-16 pb-10 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">Education</h1>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <ScrollReveal key={index} animation={index % 2 === 0 ? "fade-left" : "fade-right"} delay={index * 100}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Institution Logo */}
                <div className="md:col-span-3 flex flex-col items-center">
                  <div className="w-48 h-32 relative">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Education Details */}
                <div className="md:col-span-9">
                  <Card className="border-l-4 border-l-violet-600 dark:border-l-violet-400 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-1">
                        <GraduationCap className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        <CardTitle>{edu.degree}</CardTitle>
                      </div>

                      {/* Institution and Location */}
                      <CardDescription className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                        <span>{edu.institution}</span>
                        <span className="text-slate-400">•</span>
                        <span>{edu.location}</span>
                      </CardDescription>

                      {/* CGPA */}
                      {edu.cgpa && (
                        <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                          CGPA: {edu.cgpa}
                        </div>
                      )}

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{edu.description}</p>

                      {edu.achievements.length > 0 && (
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                            <Award className="h-4 w-4" />
                            Achievements
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-sm pl-1">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.courses && edu.courses.length > 0 && (
                        <div className="mb-4">
                          <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                            <BookOpen className="h-4 w-4" />
                            Key Courses
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.links && edu.links.length > 0 && (
                        <div>
                          <h3 className="text-sm font-semibold flex items-center gap-2 mb-2">
                            <ExternalLink className="h-4 w-4" />
                            Related Links
                          </h3>
                          <ul className="space-y-1 text-sm">
                            {edu.links.map((link, i) => (
                              <li key={i}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
                                  aria-label={`Visit ${link.name}`}
                                >
                                  {link.name}
                                  <ExternalLink className="h-3 w-3" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
