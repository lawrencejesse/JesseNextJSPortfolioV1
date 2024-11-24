import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";
import Link from 'next/link'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Jesse Lawrence - Portfolio</title>
        <meta name="description" content="Portfolio of Jesse Lawrence - Developer & Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative h-[60vh] mb-12">
        <Image
          src="/images/hero.jpg"
          alt="Ranch landscape"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Jesse Lawrence
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Rancher, Developer, and Digital Creator
          </p>
        </div>
      </section>

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
            <div className="p-6 rounded-lg bg-indigo-900/20 border border-indigo-500/30 hover:border-indigo-500 transition-all hover:bg-indigo-900/30">
              <Link href="/portfolio-videos">
                <h2 className="text-2xl font-semibold text-indigo-400 mb-2">Portfolio Videos</h2>
                <p className="text-gray-300">Videos I&apos;ve shot and edited - mainly revolving around rodeo and the ranch</p>
              </Link>
            </div>
            <div className="p-6 rounded-lg bg-purple-900/20 border border-purple-500/30 hover:border-purple-500 transition-all hover:bg-purple-900/30">
              <Link href="/coding-projects">
                <h2 className="text-2xl font-semibold text-purple-400 mb-2">Coding Projects</h2>
                <p className="text-gray-300">A random collection of projects I&apos;m using to learn, or building to solve niche problems</p>
              </Link>
            </div>
            <div className="p-6 rounded-lg bg-pink-900/20 border border-pink-500/30 hover:border-pink-500 transition-all hover:bg-pink-900/30">
              <Link href="/gis">
                <h2 className="text-2xl font-semibold text-pink-400 mb-2">GIS Work</h2>
                <p className="text-gray-300">Some cool examples of GIS stuff I do</p>
              </Link>
            </div>
            <div className="p-6 rounded-lg bg-blue-900/20 border border-blue-500/30 hover:border-blue-500 transition-all hover:bg-blue-900/30">
              <Link href="/blog">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">Blog</h2>
                <p className="text-gray-300">Giving my thougths some permanance</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
