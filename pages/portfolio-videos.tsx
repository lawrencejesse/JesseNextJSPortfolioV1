import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../components/layout/MainLayout";
import ImageWithFallback from '../components/common/ImageWithFallback';

interface VideoData {
  id: string;
  title: string;
  embedUrl: string;
  thumbnail?: string;
}

const videos: VideoData[] = [
  {
    id: "a2pylEZ7MEU",
    title: "90 Years of Rodeo - Stew Lawrence and the Moose Mountain Pro Rodeo",
    embedUrl: "https://www.youtube.com/embed/a2pylEZ7MEU",
    thumbnail: `https://img.youtube.com/vi/a2pylEZ7MEU/hqdefault.jpg`,
  },
  {
    id: "1MmnW5z1Xgc",
    title: "Out of the Fog - The Mares and Colts of Prime Time Rodeos",
    embedUrl: "https://www.youtube.com/embed/1MmnW5z1Xgc",
    thumbnail: `https://img.youtube.com/vi/1MmnW5z1Xgc/hqdefault.jpg`,
  },
  {
    id: "YtmOJHbGq9Q",
    title: "Moose Mountain Pro Rodeo - 2024 Pump Up",
    embedUrl: "https://www.youtube.com/embed/YtmOJHbGq9Q",
    thumbnail: `https://img.youtube.com/vi/YtmOJHbGq9Q/hqdefault.jpg`,
  },
  {
    id: "B-Gm5T66MvI",
    title: "Rodeo Development Camp - Call for Sponsorship",
    embedUrl: "https://www.youtube.com/embed/B-Gm5T66MvI?si=B0TnlRleG2sV6avT",
    thumbnail: `https://img.youtube.com/vi/B-Gm5T66MvI/hqdefault.jpg`,
  },
  {
    id: "IBU4kYuVeVc",
    title: "Mares Hiding in the Hoar Frost",
    embedUrl: "https://www.youtube.com/embed/IBU4kYuVeVc",
    thumbnail: `https://img.youtube.com/vi/IBU4kYuVeVc/hqdefault.jpg`,
  },
];

const PortfolioVideos: NextPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <MainLayout>
      <Head>
        <title>Portfolio Videos - Jesse Lawrence</title>
        <meta name="description" content="Video portfolio showcasing rodeo and ranch life" />
      </Head>

      <section className="py-12">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Portfolio Videos
        </h1>
        
        <div className="mb-12 text-gray-300 space-y-4">
          <p>
            I&apos;ve always had a passion for capturing and editing video of life on the ranch and in the rodeo arena. During the pandemic, this was re-awakened as I wanted
            to be able to showcase the hardships our ranch was facing and the resilience of our family. I bought a GoPro to use in the arena, to capture some unique angles and 
            perspectives. I started to use my drone for video instead of just mapping. It all came together with some editing in DaVinci Resolve. Now I&apos;ve 
            put together a lot of content, and I&apos;m sharing some of my favourites here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={video.thumbnail || ''}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <ImageWithFallback
              src="/images/PrimeTimeBoys.JPG"
              alt="Prime Time Boys"
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
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="/images/jesse_brandy_wedding1.jpg"
              alt="Jesse and Brandy Wedding"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video">
              <iframe
                src={`${selectedVideo.embedUrl}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default PortfolioVideos; 