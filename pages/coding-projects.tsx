import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";
import ImageWithFallback from '../components/common/ImageWithFallback';

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
  },
  {
    id: "salinity-viz",
    title: "Soil Salinity Data Visualization",
    description: "Interactive web app for visualizing and analyzing soil salinity data from Phase II ESA borehole samples. Features an AI assistant for in-depth analysis. Built with Python and AI assistance.",
    link: "https://salinity-data-viz-jesselawrence.replit.app/",
    tags: ["Python", "Data Viz", "AI", "Environmental"],
  },
  {
    id: "ranch-ndvi",
    title: "Ranch NDVI Analysis",
    description: "Demo application showcasing visualization of Sentinel-2 NDVI data to evaluate temporal changes in pasture health. Helps ranchers track vegetation changes over time.",
    link: "https://demo-ranch-ndvi-jesselawrence.replit.app/",
    tags: ["Remote Sensing", "GIS", "Agriculture", "Data Viz"],
  },
  {
    id: "gcc-veg",
    title: "Drone Vegetation Analysis",
    description: "Python script for analyzing low-altitude drone imagery to assess crop/grass emergence. Uses computer vision to calculate vegetation coverage percentages, enabling creation of vegetation density heatmaps.",
    link: "https://github.com/lawrencejesse/GCC-Vegetation-Detection",
    tags: ["Python", "Computer Vision", "Drones", "Agriculture"],
  },
];

const CodingProjects: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Coding Projects - Jesse Lawrence</title>
        <meta name="description" content="Showcase of coding projects and experiments" />
      </Head>

      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Coding Projects
        </h1>
        
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <ImageWithFallback
              src="/images/edinburgh_castle_cannon.jpg"
              alt="Edinburgh Castle"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <ImageWithFallback
              src="/images/jesselawrence.jpg"
              alt="Jesse Lawrence"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <ImageWithFallback
              src="/images/jesse_headshot.jpg"
              alt="Jesse Headshot"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CodingProjects; 