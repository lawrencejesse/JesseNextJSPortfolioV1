import { createZenblogClient } from "zenblog";

if (!process.env.ZENBLOG_BLOG_ID) {
  console.error('ZENBLOG_BLOG_ID is not defined');
}

export const zenblog = createZenblogClient({ 
  blogId: process.env.ZENBLOG_BLOG_ID || '' 
}); 