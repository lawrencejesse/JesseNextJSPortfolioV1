import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";

const GIS: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>GIS Work - Jesse Lawrence</title>
        <meta name="description" content="GIS analysis and projects using statistical approaches" />
      </Head>

      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">GIS Projects</h1>
        
        <div className="mb-12 text-gray-300 space-y-4">
          <p>
            I work on complex GIS problems, focusing on statistical analysis of high-resolution 
            multispectral data and quantifying spatial variability in environmental contexts.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              NDVI Distribution Analysis Tool
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
                This project tackles two significant challenges in GIS analysis:
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

              <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                Technical Approach
              </h3>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Built a Streamlit webapp using Python and AI assistance (Claude, GPT-4)</li>
                <li>Generates Cumulative Distribution Functions (CDFs) to visualize NDVI distributions</li>
                <li>Uses Earth Mover's Distance to quantify distribution differences</li>
                <li>Implements zonal statistics for comparative analysis</li>
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
        </div>
      </section>
    </MainLayout>
  );
};

export default GIS; 