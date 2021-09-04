import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const Shows = () => {
  return (
    <Layout>
      <SEO title="Shows" />
      <h2>Shows</h2>
      <div style={{ width: '100%' }}>
        <a
          href="https://www.songkick.com/artists/10131488"
          className="songkick-widget"
          data-theme="dark"
          data-detect-style="true"
          data-font-color="#fff"
          data-background-color="magenta"
          data-locale="en"
        ></a>
      </div>
    </Layout>
  );
};

export default Shows;
