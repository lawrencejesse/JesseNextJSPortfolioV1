import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";

interface ProjectData {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
  tags: string[];
}

const projects: ProjectData[] = [
  {
    id: "photo-exif",
    title: "Photo EXIF Data Extractor",
    description: "Web app that pulls EXIF data from photos and exports to CSV/JSON for use in QGIS mapping templates. Built to streamline the process of creating map-based photo logs.",
    link: "https://photoexif-jl.replit.app/",
    tags: ["HTML/CSS/JS", "EXIF", "GIS", "Data Processing"],
  },
  {
    id: "automate-boring-stuff",
    title: "Automate the Boring Stuff - Speed Run",
    description: "Video series documenting my journey learning Python through 'Automate the Boring Stuff' using AI tools like ChatGPT and Claude. Learning in public while building practical automation scripts.",
    link: "https://www.youtube.com/playlist?list=PLDljNW_Y0BJU_NEzhDgC1fzoIvITeVQi4",
    tags: ["Python", "Automation", "Learning", "AI-Assisted"],
  }
];

const CodingProjects: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Coding Projects - Jesse Lawrence</title>
        <meta name="description" content="Showcase of coding projects and experiments" />
      </Head>

      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">Coding Projects</h1>
        
        <div className="mb-12 text-gray-300 space-y-4">
          <p>
            These are my coding projects and experiments. As someone learning to code with AI assistance,
            I focus on building practical tools that solve real problems while sharing my learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-primary transition-all"
            >
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default CodingProjects; 