import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import MainLayout from '../../components/layout/MainLayout';
import { zenblog } from '../../lib/zenblog';

interface BlogPost {
  title: string;
  slug: string;
  published_at: string;
  html_content: string;
  excerpt?: string;
  cover_image?: string;
  tags?: Array<{ name: string; slug: string; }>;
  category?: {
    name: string;
    slug: string;
  };
}

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  if (!post) return <div>Loading...</div>;

  return (
    <MainLayout>
      <Head>
        <title>{post.title} - Jesse Lawrence</title>
      </Head>
      
      <article className="py-12 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
          {post.title}
        </h1>
        
        <div className="text-sm text-gray-400 mb-8">
          Posted on {new Date(post.published_at).toLocaleDateString()}
        </div>

        <div 
          className="prose prose-invert prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html_content }} 
        />
      </article>
    </MainLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await zenblog.posts.list();
    const posts = response.data || [];
    
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error('Failed to fetch posts for static paths:', error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await zenblog.posts.get({ slug: params.slug as string });
    return {
      props: {
        post: post.data,
      },
    };
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return {
      notFound: true,
    };
  }
}; 