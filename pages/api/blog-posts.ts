
import { createZenblogClient } from "zenblog";

export default async function handler(req, res) {
  const zenblog = createZenblogClient({ 
    blogId: process.env.ZENBLOG_BLOG_ID 
  });

  try {
    const posts = await zenblog.posts.list();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
}
