import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import RippleEffect from "../components/effects/RippleEffect";

const ResearchPoster: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="parallax-container">
      <Head>
        <title>AI Tools for Non-Coders - Research Poster</title>
        <meta name="description" content="Research poster on AI Tools for Non-Coders and how LLMs and Coding can Empower Environmental Professionals" />
      </Head>

      {mounted && <RippleEffect />}

      {/* Navigation Button */}
      <Link 
        href="/"
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full border border-gray-700 hover:border-primary transition-all duration-300 flex items-center space-x-2"
      >
        <span>Visit Full Portfolio</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

      {/* Parallax Background */}
      <div className="parallax-bg">
        <Image
          src="/images/8-bit forrest.jpg"
          alt="8-bit forest background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Poster Content */}
      <div className="parallax-content">
        <div className="container mx-auto px-4 py-8 max-w-6xl text-white">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-center bg-gradient-to-br from-white via-blue-300 to-blue-800 bg-clip-text text-transparent">
              AI Tools for Non-Coders
            </h1>
            
            <h2 className="text-2xl text-center text-blue-400">
              How LLMs and Coding can Empower Environmental Professionals
            </h2>

            {/* Catchphrase */}
            <p className="text-3xl font-bold text-center italic text-primary animate-pulse">
              You Can Just Do Things
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Abstract Section */}
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Abstract</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Artificial Intelligence and Large Language Models are transforming our World</li>
                  <li>• Used properly they can give anyone superpowers</li>
                  <li>• Frontier models are approaching PhD levels of intelligence</li>
                  <li>• AI is great for brainstorming, writing and reviewing data - but professionals are already quite good at that</li>
                  <li>• It allows anyone to write code and deploy it Today</li>
                  <li>• Coding allows you to do things that you cannot do without code</li>
                  <li>• Domain experts now can use code to solve niche problems</li>
                  <li>• Understand AI, data and coding to unlock the future of work</li>
                </ul>
              </div>

              {/* Rationale Section */}
              <div className="bg-gray-900/80 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Rationale</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Understand that coding is now accessible to anyone</li>
                  <li>• AI today is literally the worst it will ever be - learn to use these tools</li>
                  <li>• What does work look like when intelligence becomes a commodity?</li>
                  <li>• Stop waiting for someone to solve the problems you face</li>
                  <li>• Python is ideal for automation, stats, data analysis, and visualization</li>
                  <li>• Replit lowers the barrier to entry - create, iterate, collaborate, deploy</li>
                  <li>• Collaborate in your org or across the world with open-source code</li>
                  <li>• The future of reclamation and remediation is in better data</li>
                  <li>• High res maps, drones, computer vision and machine learning</li>
                  <li>• More data, more complexity - coding and AI enable practical utility</li>
                </ul>
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-gray-900/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Image
                    src="/openai.png"
                    alt="OpenAI Logo"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">ChatGPT</h4>
                    <p className="text-gray-300">General purpose - best for brainstorming, advanced reasoning and troubleshooting and iterating code.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image
                    src="/replit.svg"
                    alt="Replit Logo"
                    width={24}
                    height={24}
                    className="mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">Replit</h4>
                    <p className="text-gray-300">This is where you'll build and deploy your code. All online, with an advanced coding agent. Allows for collaborative editing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Image
                    src="/githubblack.png"
                    alt="GitHub Logo"
                    width={24}
                    height={24}
                    className="mt-1 invert"
                  />
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">GitHub</h4>
                    <p className="text-gray-300">Online repository - save and backup your work - allows for easy sharing and a goldmine for finding open-source projects to fork.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 mt-1 flex items-center justify-center bg-blue-500 rounded">
                    <span className="text-xs font-bold text-white">λ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-2">Llamacoder</h4>
                    <p className="text-gray-300">Free site to build simple apps you can share and demo in real-time. Try it now!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-gray-900/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Examples</h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <span className="font-semibold">photoexif-jl.replit.app</span> - Allows the user to upload a folder of photos, and download the photo lat/long, altitude, bearing etc. I use to build my map-based photo logs.
                </li>
                <li>
                  <span className="font-semibold">Green Plant Detection</span> - python script that detects green plants against black soil or dead vegetation.
                </li>
                <li>
                  <span className="font-semibold">Satellite NDVI Temporal Assessment</span>
                </li>
                <li>
                  <span className="font-semibold">Detailed Salinity Analytical Visualizations</span> - <a href="https://salinity-data-viz-jesselawrence.replit.app/" className="text-blue-400 hover:underline">https://salinity-data-viz-jesselawrence.replit.app/</a> - upload your raw analytical data and explore how the various parameters (EC, SAR, Cl, Na etc. change with depth, which are most related and how the sulphate profile changes with depth (i.e. upward or downward groundwater flow)
                </li>
              </ul>
            </div>

            {/* Conclusions Section */}
            <div className="bg-gray-900/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Conclusions</h3>
              <p className="text-gray-300">
                The future of environmental work is data-driven, collaborative and powered by accessible tools like AI and Coding. By embracing these technologies today, we unlock new ways to solve challenges, automate workflows, and innovate faster than ever. The tools are here, its up to us to use domain expertise to apply them.
              </p>
            </div>

            {/* Footer Quotes */}
            <div className="mt-8 text-center space-y-2">
              <p className="text-gray-400 italic">"The future is here, its just unevenly distributed" - William Gibson</p>
              <p className="text-gray-400 italic">"There's a way to do it better - find it" - Thomas Edison</p>
            </div>

            {/* QR Code Section */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Interactive Poster</h3>
              <p className="text-gray-300">See this Poster Online</p>
              {/* Add your QR code image here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPoster; 