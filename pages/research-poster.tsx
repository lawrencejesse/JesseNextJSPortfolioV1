import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ResearchPoster: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simulate minimum loading time for animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>AI Tools for Non-Coders - Research Poster</title>
        <meta name="description" content="Research poster on AI Tools for Non-Coders and how LLMs and Coding can Empower Environmental Professionals" />
        <style>{`
          @keyframes grow {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            60% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          @keyframes fadeOut {
            to {
              opacity: 0;
              visibility: hidden;
            }
          }
          .leaf {
            animation: grow 2.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .loading-screen {
            animation: fadeOut 0.5s forwards;
            animation-delay: 2.3s;
          }
        `}</style>
      </Head>

      {isLoading && (
        <div className="loading-screen fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
          <div className="relative w-20 h-20">
            <div className="leaf absolute inset-0 border-4 border-green-500 rounded-full" />
            <div className="leaf absolute inset-0 border-4 border-green-400 rounded-full" style={{ animationDelay: '0.5s' }} />
            <div className="leaf absolute inset-0 border-4 border-green-300 rounded-full" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      )}

      {/* Background Image with Parallax */}
      <div 
        className="fixed inset-0 z-0 overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.10}px)`,
          transition: 'transform 0.1s ease-out',
          marginTop: '-70vh',
          height: '170vh'
        }}
      >
        <div className="absolute inset-0" style={{ transform: 'scale(1.0)' }}>
          <Image
            src="/images/8-bit forrest.jpg"
            alt="8-bit forest background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Navigation Button */}
      <Link 
        href="/"
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-gray-900/80 hover:bg-gray-800 text-white rounded-full border border-gray-700 hover:border-primary transition-all duration-300 flex items-center space-x-2"
      >
        <span>Jesse Lawrence Portfolio</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-6xl text-white">
          <div className="space-y-8">
            {/* Header Section */}
            <div className="bg-gray-900/80 p-8 rounded-lg space-y-6">
              <h1 className="text-5xl font-bold text-center bg-gradient-to-br from-white via-blue-300 to-blue-800 bg-clip-text text-transparent">
                AI Tools for Non-Coders
              </h1>
              
              <h2 className="text-2xl text-center text-blue-400">
                How LLMs and Coding can Empower Environmental Professionals
              </h2>

              {/* Catchphrase */}
              <p className="text-3xl font-bold text-center italic text-[#FF6F61] animate-pulse">
                You Can Just Do Things
              </p>
            </div>

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
                  <li>• More data = more complexity - coding and AI enable practical utility</li>
                </ul>
              </div>
            </div>

            {/* Tools Section */}
            <div className="bg-gray-900/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <a 
                    href="https://chat.openai.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group inline-flex items-center space-x-3 cursor-pointer mb-2 relative z-20"
                  >
                    <Image
                      src="/images/openai.svg"
                      alt="OpenAI Logo"
                      width={24}
                      height={24}
                      className="mt-1 invert"
                    />
                    <h4 className="font-semibold text-blue-300 group-hover:text-blue-400">ChatGPT</h4>
                  </a>
                  <p className="text-gray-300">General purpose - best for brainstorming, advanced reasoning and troubleshooting and iterating code.</p>
                </div>

                <div>
                  <a 
                    href="https://replit.com/~" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-3 cursor-pointer mb-2 relative z-20"
                  >
                    <div className="w-6 h-6 mt-1">
                      <svg width="24" height="24" viewBox="0 0 32 32" className="text-[#F26207]" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M6 5.5C6 4.67157 6.67157 4 7.5 4H14.5C15.3284 4 16 4.67157 16 5.5V12H7.5C6.67157 12 6 11.3284 6 10.5V5.5Z" />
                        <path fill="currentColor" d="M16 12H24.5C25.3284 12 26 12.6716 26 13.5V18.5C26 19.3284 25.3284 20 24.5 20H16V12Z" />
                        <path fill="currentColor" d="M6 21.5C6 20.6716 6.67157 20 7.5 20H16V26.5C16 27.3284 15.3284 28 14.5 28H7.5C6.67157 28 6 27.3284 6 26.5V21.5Z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-blue-300 group-hover:text-blue-400">Replit</h4>
                  </a>
                  <p className="text-gray-300">This is where you'll build and deploy your code. All online, with an advanced coding agent. Allows for collaborative editing.</p>
                </div>

                <div>
                  <a 
                    href="https://github.com/lawrencejesse" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-3 cursor-pointer mb-2 relative z-20"
                  >
                    <Image
                      src="/images/github-original-wordmark.svg"
                      alt="GitHub Logo"
                      width={24}
                      height={24}
                      className="mt-1 invert"
                    />
                    <h4 className="font-semibold text-blue-300 group-hover:text-blue-400">GitHub</h4>
                  </a>
                  <p className="text-gray-300">Online repository - save and backup your work - allows for easy sharing and a goldmine for finding open-source projects to fork.</p>
                </div>

                <div>
                  <a 
                    href="https://llamacoder.together.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-3 cursor-pointer mb-2 relative z-20"
                  >
                    <div className="w-6 h-6 mt-1 flex items-center justify-center bg-blue-500 rounded">
                      <span className="text-xs font-bold text-white">λ</span>
                    </div>
                    <h4 className="font-semibold text-blue-300 group-hover:text-blue-400">Llamacoder</h4>
                  </a>
                  <p className="text-gray-300">Free site to build simple apps you can share and demo in real-time. Try it now!</p>
                </div>
              </div>
            </div>

            {/* Examples Section */}
            <div className="bg-gray-900/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400 text-center">&lt;/&gt; Live Examples &lt;/&gt; <span className="text-sm">(made by Jesse)</span></h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a 
                    href="https://salinity-data-viz-jesselawrence.replit.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-blue-400 hover:text-blue-300 underline relative z-20"
                  >
                    Detailed Salinity Analytical Visualizations – Demo
                  </a>
                  {" "}- upload your borehole analytical data and explore how the various parameters (EC, SAR, Cl, Na etc). interact, and get assistance understanding the soil chemistry with AI.
                </li>
                <li>
                  <a 
                    href="https://demo-ranch-ndvi-jesselawrence.replit.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-blue-400 hover:text-blue-300 underline relative z-20"
                  >
                    Satellite NDVI Temporal Assessment
                  </a>
                  {" "}- Rough Demo of how to visualize and interact with NDVI data, as a land manager.
                </li>
                <li>
                  <a 
                    href="https://jesselawrence.pro/coding-projects" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-blue-400 hover:text-blue-300 underline relative z-20"
                  >
                    Live list of coding projects I'm working on
                  </a>
                </li>
              </ul>
            </div>

            {/* Conclusions Section */}
            <div className="bg-gray-900/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Conclusions</h3>
              <div className="text-gray-300 space-y-4">
                <p>The future of environmental work is data-driven, collaborative and supercharged with AI and Coding. By embracing these technologies today, we unlock new ways to solve challenges, automate workflows, and innovate faster than ever. The tools are here, there is no manual – combine them with domain expertise to create real impact.</p>
                <p>Growth comes from collaboration. Exchange ideas, experiment boldly, push boundaries. <strong>The future is accelerating and now is the time to learn and to create.</strong></p>
              </div>
            </div>

            {/* Video Section */}
            <div className="bg-gray-900/80 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Watch Me Build This Website as a Digital Twin to my Conference Poster</h3>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/y8LPUddlGQQ"
                  title="Building the AI Coding Poster"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-gray-300 mt-4 text-center">
                Watch how this poster was created using AI-assisted coding
              </p>
            </div>

            {/* Footer Quotes */}
            <div className="bg-gray-900/80 p-6 rounded-lg text-center space-y-2">
              <h3 className="text-xl font-semibold mb-4 text-blue-400"></h3>
              <p className="text-xl-gray-400">"The future is here, its just unevenly distributed" - William Gibson</p>
              <p className="text-xl-gray-400">"There's a way to do it better - find it" - Thomas Edison</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPoster; 