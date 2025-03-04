export default {
    async fetch(request) {
      const url = new URL(request.url);
      const gonePages = [
        '/category/technology',
        '/page/3',
        '/page/7',
        '/category/marketing',
        '/category/social-media',
        '/category/seo',
        '/page/2',
        '/category/programming',
        '/category/content',
        '/category/definition',
        '/tags/google-search-console-site-migration/',
        '/tags/mobile-seo-for-site-migration/',
        '/tags/site-migration-seo-audit/',
        '/tags/updating-sitemaps-after-migration/',
        '/what-is-crawl-budget-and-why-does-it-matter-for-seo',
        '/the-importance-of-mobile-seo-for-your-website/feed',
        '/semantic-seo-how-to-use-it-for-better-rankings',
        '/page/5',
        '/zzjg/jxjg.htm',
        '/index.htm',
        '/ux-vs-ui-whats-the-difference',
        '/tags/website-migration-checklist/',
        '/whats-a-subdomain-how-is-it-used',
        '/page/6',
        '/the-role-of-social-media-in-seo-strategy',
        '/page/4',
        '/lander',
        '/international-seo-expanding-your-global-reach',
        '/types-of-ssl-certificates-which-one-is-right-for-your-site',
        '/what-are-internet-cookies-and-what-do-they-do',
        '/what-are-broken-links-and-how-do-you-find-and-fix',
        '/category/technology/feed',
        '/what-is-negative-seo-and-how-to-tackle-it',
        '/front-end-vs-back-end',
        '/what-is-remote-work-ultimate-guide',
        '/what-is-lazy-loading-how-to',
        '/how-to-write-an-seo-compatible-article',
        '/what-is-a-key-performance-indicators-kpi',
        '/the-art-of-on-page-seo-optimization',
        '/keyword-cannibalization-how-to-find-fix-and-prevent-it',
        '/what-is-holistic-seo',
        '/what-is-a-sitemap-website-sitemaps-explained',
        '/cdn-cgi/l/email-protection',
        '/cgi-sys/defaultwebpage.cgi',
        '/what-is-a-call-to-action-cta/feed',
        '/category/content/feed',
        '/content-marketing-for-seo-creating-engaging-content',
        '/what-is-a-call-to-action-cta',
        '/google-ads-what-are-google-ads-how-do-they-work',
        '/category/definition/feed',
        '/what-is-google-search-console-used-for',
        '/the-importance-of-mobile-seo-for-your-website',
        '/the-role-of-social-media-in-seo-strategy/feed',
        '/seo-vs-sem-which-strategy-is-right-for-you',
        '/google-ads-what-are-google-ads-how-do-they-work/feed'
      ];
  
      // Check if the requested path is in the gonePages list
      if (gonePages.includes(url.pathname)) {
        return new Response('This page is permanently gone.', {
          status: 410,
          statusText: 'Gone'
        });
      }
  
      // Pass through to static files if not in the list
      return fetch(request);
    },
  };