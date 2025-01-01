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
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-br from-white via-blue-300 to-blue-800 bg-clip-text text-transparent">
                Full Time Thinker, Part Time Tinkerer
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              A non-technical, non-developer exploring the world of code through AI-assisted development. The goal is to be able to make coding approachable, 
              and solve problems by leveraging AI. I want to build in public, and share what I&apos;m doing while highlighting the unique and interesting parts of
              my work and my life. I&apos;m very proud of what I&apos;ve accomplished personally and professionally and this is my attempt to share it more broadly. 
              I&apos;m always looking to explore new ideas, so feel free to reach out if there&apos;s anything you find interesting!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/portfolio-videos" className="block p-6 rounded-lg bg-indigo-900/20 border border-indigo-500/30 hover:border-indigo-500 transition-all hover:bg-indigo-900/30">
              <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Portfolio Videos</h2>
              <p className="text-gray-300">Videos I&apos;ve shot and edited - mainly revolving around rodeo and the ranch</p>
            </Link>
            
            <Link href="/coding-projects" className="block p-6 rounded-lg bg-purple-900/20 border border-purple-500/30 hover:border-purple-500 transition-all hover:bg-purple-900/30">
              <h2 className="text-2xl font-semibold text-purple-400 mb-2">Coding Projects</h2>
              <p className="text-gray-300">A random collection of projects I&apos;m using to learn, or building to solve niche problems</p>
            </Link>
            
            <Link href="/gis" className="block p-6 rounded-lg bg-pink-900/20 border border-pink-500/30 hover:border-pink-500 transition-all hover:bg-pink-900/30">
              <h2 className="text-2xl font-semibold text-pink-400 mb-2">GIS Work</h2>
              <p className="text-gray-300">Some cool examples of GIS stuff I do</p>
            </Link>
            
            <Link href="/blog" className="block p-6 rounded-lg bg-blue-900/20 border border-blue-500/30 hover:border-blue-500 transition-all hover:bg-blue-900/30">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Blog</h2>
              <p className="text-gray-300">Giving my thoughts some permanence</p>
            </Link>
          </div>

          {/* Photo gallery at bottom */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <ImageWithFallback
                src="/images/MaresSnowStorm.jpg"
                alt="Mares in snow storm"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="/images/family_2024.jpg"
                alt="Family 2024"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <ImageWithFallback
                src="/images/PrimeTimeBoys.JPG"
                alt="Prime Time Boys"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
