import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Newsletter from '../components/Newsletter';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      DALAI PUMA
    </h1>
    <p className="music">
      Rhabarber Pop, Barbershop Hop, Indie wRap, Rock Lobster. Raaaa!
    </p>
    <Newsletter />
    <iframe
      title="Your Kink Is Not My Kink But Your Kink Is Ok by Dalai Puma"
      loading="lazy"
      src="https://bandcamp.com/EmbeddedPlayer/track=1578663658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
      seamless
    />

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
      h1 {
        margin: 0;
        font-size: 2em;
      }
      .music {
        text-align: center;
        font-size: 1.5em;
        @media screen and (max-width: 700px) {
          font-size: 1em;
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
