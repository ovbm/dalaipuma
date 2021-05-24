import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/sociallinks';
import Newsletter from '../components/newsletter';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ fontSize: '2.8em', color: 'white', fontWeight: 'bold' }}>
      DALAI PUMA
    </h1>
    <SocialLinks />
    <p style={{ color: 'white', fontWeight: 'bold' }}>
      Rhabarber Pop, Barbershop Hop, Indie wRap, Rock Lobster. Raaaa!
    </p>
    <Newsletter />

    <iframe
      title="You don&#39;t know how to Kiss by Dalai Puma"
      loading="lazy"
      src="https://bandcamp.com/EmbeddedPlayer/track=197760067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
    />
    <iframe
      title="My Bedroom is an Entire Town by Dalai Puma"
      loading="lazy"
      src="https://bandcamp.com/EmbeddedPlayer/track=2158678826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
    />
    <iframe
      title="Cigarette Day by Dalai Puma"
      loading="lazy"
      src="https://bandcamp.com/EmbeddedPlayer/track=588048221/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
    />
    <iframe
      title="Karma Ping Pong by Dalai Puma"
      loading="lazy"
      src="https://bandcamp.com/EmbeddedPlayer/track=2909376046/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
    />
    <iframe
      title="Leave Your Tribe by Dalai Puma"
      loading="lazy"
      src="https://bandcamp.com/EmbeddedPlayer/track=2109071849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
    />
    <style jsx>{`
      iframe {
        align-self: center;
        margin: 2em 0;
        border: 0;
        width: 300px;
        height: 442px;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
