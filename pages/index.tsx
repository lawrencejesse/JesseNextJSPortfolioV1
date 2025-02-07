import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";
import Link from 'next/link'
import ImageWithFallback from '../components/common/ImageWithFallback';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Jesse Lawrence - Portfolio</title>
        <meta name="description" content="Portfolio of Jesse Lawrence - Developer & Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-20">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-br from-white via-blue-300 to-blue-800 bg-clip-text text-transparent hover:from-blue-300 hover:to-white transition-all duration-300">
                Full Time Thinker, Part Time Tinkerer
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Welcome to my experimental website where I am trying to show who I am, my curiosity for the world around me, and seeing what I can build. 
              I am non-technical, I am not a developer, I am just someone exploring the world of code through AI. I built this website (NextJS) from scratch, to 
              showcase my work, and to see what is possible to build.
              <br />
              <br />
              My real goal is to learn how to solve problems by leveraging AI, so I thought I would try to document my progress by building in public. What better way to do this than by highlighting the unique and interesting parts of
              my work and my life. I&apos;m very proud of what I&apos;ve accomplished personally and professionally and this is my attempt to share it more broadly. 
              I&apos;m always looking to explore new ideas, so feel free to reach out if there&apos;s anything you find interesting!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/portfolio-videos" className="group block p-6 rounded-lg bg-indigo-900/20 border border-indigo-500/30 hover:border-indigo-500 transition-all hover:bg-indigo-900/30 hover:transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-2 group-hover:text-indigo-300">Portfolio Videos</h2>
              <p className="text-gray-300">Videos I&apos;ve shot and edited - mainly revolving around rodeo and the ranch</p>
            </Link>
            
            <Link href="/coding-projects" className="group block p-6 rounded-lg bg-purple-900/20 border border-purple-500/30 hover:border-purple-500 transition-all hover:bg-purple-900/30 hover:transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold text-purple-400 mb-2 group-hover:text-purple-300">Coding Projects</h2>
              <p className="text-gray-300">A random collection of projects I&apos;m using to learn, or building to solve niche problems</p>
            </Link>
            
            <Link href="/gis" className="group block p-6 rounded-lg bg-pink-900/20 border border-pink-500/30 hover:border-pink-500 transition-all hover:bg-pink-900/30 hover:transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold text-pink-400 mb-2 group-hover:text-pink-300">GIS Projects</h2>
              <p className="text-gray-300">Some cool examples of how I use GIS to solve problems</p>
            </Link>
            
            <Link href="/blog" className="group block p-6 rounded-lg bg-blue-900/20 border border-blue-500/30 hover:border-blue-500 transition-all hover:bg-blue-900/30 hover:transform hover:-translate-y-1">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2 group-hover:text-blue-300">Blog</h2>
              <p className="text-gray-300">Giving my thoughts some permanence</p>
            </Link>
          </div>

          {/* Photo gallery at bottom */}
          <div className="mt-20 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-100">Life Snapshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <ImageWithFallback
                  src="/images/MaresSnowStorm.jpg"
                  alt="Mares in snow storm"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">Ranch Life - Mares in Snow Storm</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
                <ImageWithFallback
                  src="/images/family_2024.jpg"
                  alt="Family 2024"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">Family Moments - 2024</p>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <ImageWithFallback
                  src="/images/PrimeTimeBoys.JPG"
                  alt="Prime Time Boys"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">Prime Time Boys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
