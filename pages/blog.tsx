
import { useState, useEffect } from 'react'
import Head from 'next/head'
import MainLayout from '../components/layout/MainLayout'

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/api/blog-posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

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
          {posts.map((post) => (
            <article key={post.id} className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
              )}
              <div className="text-sm text-gray-400">
                Posted on {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}
