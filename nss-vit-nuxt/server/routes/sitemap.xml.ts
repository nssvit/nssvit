import { SitemapStream, streamToPromise } from 'sitemap';
import { serverQueryContent } from '#content/server';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  // Initialize the sitemap stream
  const sitemap = new SitemapStream({
    hostname: 'https://nssvit.in'
  });

  // Add static routes
  sitemap.write({ url: '/', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 });
  sitemap.write({ url: '/team', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 });
  sitemap.write({ url: '/events', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/gallery', lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.8 });
  sitemap.write({ url: '/camp', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/achievements', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 });
  sitemap.write({ url: '/developers', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 });
  sitemap.write({ url: '/contact', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.5 });

  // Query content files
  try {
    // You could also query content files and add them to the sitemap
    // const docs = await serverQueryContent(event).find();
    // for (const doc of docs) {
    //   if (doc._path) {
    //     sitemap.write({
    //       url: doc._path,
    //       lastmod: doc.updatedAt || new Date().toISOString(),
    //       changefreq: 'monthly'
    //     });
    //   }
    // }
  } catch (e) {
    console.error(e);
  }

  // End the stream
  sitemap.end();

  // Generate XML from the stream
  const xml = await streamToPromise(sitemap);
  
  // Set appropriate headers
  event.node.res.setHeader('Content-Type', 'application/xml');
  event.node.res.setHeader('Cache-Control', 'max-age=3600, s-maxage=3600, stale-while-revalidate=86400, public');
  
  // Return the XML
  return xml.toString();
});