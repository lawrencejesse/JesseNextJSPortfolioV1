import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout'

export default function Blog() {
  return (
    <MainLayout>
      <Head>
        <title>Blog - Jesse Lawrence</title>
      </Head>
      
      <section className="py-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-8">
          Blog
        </h1>
        <div className="grid gap-8">
          {/* Example blog post card */}
          <article className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Example Blog Post
            </h2>
            <p className="text-gray-300 mb-4">
              This is a preview of the blog post content...
            </p>
            <div className="text-sm text-gray-400">
              Posted on January 1, 2024
            </div>
          </article>
        </div>
      </section>
    </MainLayout>
  )
} 