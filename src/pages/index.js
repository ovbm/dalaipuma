import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Newsletter from '../components/Newsletter';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>DALAI PUMA</h1>
    <p className="music">
      Rhabarber Pop, Barbershop Hop, Indie wRap, Rock Lobster. Raaaa!
    </p>
    <Newsletter />
    <div className="videContainer">
      <iframe
        width="560"
        height="315"
        loading="lazy"
        src="https://www.youtube-nocookie.com/embed/CA9m5_kJVLc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <iframe
      style={{ border: 0, width: 700, height: 820, marginBottom: 24 }}
      src="https://bandcamp.com/EmbeddedPlayer/album=3754664760/size=large/bgcol=333333/linkcol=e99708/tracklist=false/transparent=true/"
      seamless
    >
      <a href="https://dalaipuma.bandcamp.com/album/ok-ciao-kakao">
        Ok Ciao Kakao by Dalai Puma
      </a>
    </iframe>
    <div className="bandcampGrid">
      <div className="flexItem">
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="442"
            title="Your Kink Is Not My Kink But Your Kink Is Ok by Dalai Puma"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/track=1578663658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          />
        </div>
      </div>
      <div className="flexItem">
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="442"
            title="You don&#39;t know how to Kiss by Dalai Puma"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/track=197760067/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          />
        </div>
      </div>
      <div className="flexItem">
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="442"
            title="My Bedroom is an Entire Town by Dalai Puma"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/track=2158678826/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          />
        </div>
      </div>
      <div className="flexItem">
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="442"
            title="Cigarette Day by Dalai Puma"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/track=588048221/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          />
        </div>
      </div>
      <div className="flexItem">
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="442"
            title="Karma Ping Pong by Dalai Puma"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/track=2909376046/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          />
        </div>
      </div>
      <div className="flexItem">
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="442"
            title="Leave Your Tribe by Dalai Puma"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/track=2109071849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
            seamless
          />
        </div>
      </div>
    </div>
    <style jsx>{`
      .flexItem {
        flex: 1;
      }
      .bandcampContainer {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-width: 300px;
        padding-top: 131%; /* Aspect Ratio */
        margin: 0;
        iframe {
          border: 0;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
      }

      .bandcampGrid {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: space-evenly;
      }
      h1 {
        margin: 0;
        font-size: 2em;
      }
      .music {
        text-align: center;
        font-size: 1.75em;
        font-weight: bold;
      }
      @media screen and (max-width: 700px) {
        .music {
          font-size: 1.5em;
        }
      }
      .videContainer {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
        margin: 1em auto;
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
