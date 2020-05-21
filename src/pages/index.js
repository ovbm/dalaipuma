import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/sociallinks';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontSize: '2.8em', color: 'white', fontWeight: 'bold' }}>DALAI PUMA</h1>
    <iframe
      style={{ alignSelf: 'center', margin: '2em 0', border: 0, width: '300px', height: '442px' }}
      src="https://bandcamp.com/EmbeddedPlayer/track=2109071849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
    >
      <a href="http://dalaipuma.bandcamp.com/track/leave-your-tribe">
        Leave Your Tribe by Dalai Puma
      </a>
    </iframe>
    <SocialLinks />
  </Layout>
);

export default IndexPage;
