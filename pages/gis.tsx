import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Image from 'next/image';

// Import the comparison slider with SSR disabled
const ReactCompareImage = dynamic(() => import('react-compare-image'), {
  ssr: false
});

const GIS: NextPage = () => {
  const [showSecondPhoto, setShowSecondPhoto] = useState(false);

  return (
    <MainLayout>
      <Head>
        <title>GIS Services - Jesse Lawrence</title>
        <meta name="description" content="Professional GIS services including drone mapping, spatial analysis, and environmental monitoring" />
      </Head>

      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">
          GIS Services
        </h1>
        
        <div className="mb-12 text-gray-300 space-y-4">
          <p>Everything I do in GIS has started with my personal experience in the field, and figuring out how
             I can find new ways to make my work more efficient. Because of this, all my work is built to send maps to 
             be used in the field, and for field users to collect data that compliments the maps. From planning, to execution to final reporting,
             this is a holistic overview of the site.</p>

          <p>
            I specialize in GIS solutions of varying complexity. I enjoy with high-resolution spatial data analysis,
            environmental monitoring, and delivering intuitive visualizations for stakeholders. The goal is to collect
             better data and unpack it so better decision can be made. 
          </p>
        </div>

        {/* Mapping Section */}
        <div className="space-y-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">Mapping</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">High Resolution Drone Maps</h3>
                <p className="text-gray-300 mb-4">RGB (Visual Light) or Multispectral (Vegetation Health Maps)</p>
                <div className="max-w-3xl mx-auto bg-gray-800/50 p-4 rounded-lg">
                  <ReactCompareImage
                    leftImage="/images/home_quarter_overveiw.jpeg"
                    rightImage="/images/home_quarter_NDVI.jpeg"
                    leftImageLabel="Visual Light"
                    rightImageLabel="NDVI"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Digital Elevation Models for Topographic Analysis</h3>
                <div className="max-w-3xl mx-auto bg-gray-800/50 p-4 rounded-lg">
                  <ReactCompareImage
                    leftImage="/images/home_quarter_overveiw.jpeg"
                    rightImage="/images/home_quarter_DSM.jpeg"
                    leftImageLabel="Visual Light"
                    rightImageLabel="Digital Surface Model"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Combination Mapping Section */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">Combination Mapping / Photo Log</h2>
            
            <div className="space-y-6">
              <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4 mb-6">
                <li>Sync Drone Photo Location and Orientation Icon on Map with the Photo for an intuitive way to showcase your site</li>
                <li>Also works with SmartPhone Photos * (Need to collect proper photo EXIF information)</li>
                <li>Works great for crop scouting, large scale environmental site assessments, right of way assessments</li>
                <li>Custom Basemaps (drone maps, historic aerials, precision ag zones etc.) and Data Layers (survey boundaries, flowlines, well centres)</li>
                <li>Multiple map overviews</li>
              </ul>

              <div 
                className="max-w-3xl mx-auto bg-gray-800/50 p-4 rounded-lg cursor-pointer relative aspect-video"
                onClick={() => setShowSecondPhoto(!showSecondPhoto)}
              >
                <Image
                  src={showSecondPhoto ? "/images/ObliquePhotoLog.jpeg" : "/images/ObliquePhoto.png"}
                  alt="Oblique Photo View"
                  fill
                  className="object-contain rounded-lg transition-opacity duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-3 py-1 rounded text-sm">
                  Click to toggle view
                </div>
              </div>
            </div>
          </div>

          {/* Right of Way Assessments Section */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">Right of Way Assessments</h2>
            
            <div className="space-y-6">
              <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4 mb-6">
                <li>Combination Drone Map with Photo Log</li>
                <li>Excellent for assessing ROWs to see if any residual crop damages</li>
                <li>Intuitive visuals make it easy to communicate with key stakeholders, landowners and regulators</li>
              </ul>

              <div className="aspect-video mb-6">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/JusBQdPe4rs"
                  title="ROW Inspection with Telemetry Overlays"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-gray-300 text-sm">High-Resolution Video inspections with custom telemetry overlays for reference</p>
            </div>
          </div>

          {/* GIS Project Setup Section */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">GIS Project Setup & Field Integration</h2>
            
            <div className="space-y-6">
              <div className="space-y-4 text-gray-300">
                <p className="font-semibold text-white">Build a "Digital Twin" of your site</p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>Combine survey boundaries, utility locates, boreholes, well centres etc, with basemaps for a geospatially accurate representation of your site</li>
                  <li>Groundwater Contours</li>
                  <li>Add in additional layers:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Drone maps</li>
                      <li>Vegetation health</li>
                      <li>Elevation models</li>
                      <li>Soil conductivity maps (EM38, EM31)</li>
                    </ul>
                  </li>
                  <li>Push all these maps to your GPS unit (Trimble Handsets, mobile phone etc.)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Geospatial Analysis Section */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-6">Advanced Geospatial Analysis</h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                Explore custom analysis options for whatever you are trying to solve. If you need to assess crop health on large areas, 
                identify areas of weak growth, measure if bare areas are growing or shrinking, understanding how topography is affecting 
                the vegetation on dry or wet years, searching for noxious weeds and creating prescription maps for targeted spraying, 
                let's see how advanced geospatial analysis can help solve your problem.
              </p>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Vegetation Health Analysis</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>Multispectral data analysis</li>
                    <li>Zonal Statistics (compare vegetation health between zones)</li>
                    <li>Bare soil area calculations</li>
                    <li>Vegetation vs Topography analysis</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-3 ml-4">
                    <li>Ultra High Resolution Plant Detection</li>
                    <li>Experimental work measuring crop emergence</li>
                    <li>Identify areas with poor emergence, flea beetle or cutworm damage</li>
                    <li>Flowering analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Project Example - keeping this for now */}
        <div className="mt-16 bg-gray-800/50 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Featured Project: Interactive NDVI Distribution Analysis Tool
          </h2>
          
          <div className="aspect-video mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/3KMFKWgS8Ts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="space-y-4 text-gray-300">
            <p>
              This experimental project is ongoing, and demonstrates how I'm trying to handle two significant challenges in high resolution vegetation analysis:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Statistical analysis of high-resolution multispectral maps where traditional 
                significance tests become problematic due to extremely large sample sizes
              </li>
              <li>
                Quantifying field variability where conventional central tendency statistics 
                fail to capture important localized variations in crop growth
              </li>
            </ul>

            <div className="mt-6">
              <a 
                href="https://github.com/lawrencejesse/CDF-EMD-Zonal-Stats-v1" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Project on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default GIS; 