import React from 'react';
import Head from 'next/head';
import config from '../config';

function SEO({ description, meta, title }) {
  const siteTitle = config.title;
  const siteDescription = config.description

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.instagram} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
  );
}

export default SEO;
