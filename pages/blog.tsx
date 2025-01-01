import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { zenblog } from '../lib/zenblog';

interface BlogPost {
  title: string;
  slug: string;
  published_at: string;
  excerpt?: string;
  cover_image?: string;
  tags?: string[];
  category?: {
    name: string;
    slug: string;
  };
}

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  console.log('Posts received in component:', posts);
  
  const blogPosts = Array.isArray(posts) ? posts : [];
  
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date unavailable';
    }
  };

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
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
              )}
              <div className="text-sm text-gray-400">
                Posted on {formatDate(post.published_at)}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    console.log('ZENBLOG_BLOG_ID:', process.env.ZENBLOG_BLOG_ID);
    
    const response = await zenblog.posts.list();
    console.log('Zenblog raw response:', response);
    
    const posts = response.data || [];
    console.log('Processed posts:', posts);
    
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};
