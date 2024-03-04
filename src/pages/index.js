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
    <div className="bandcampGrid">
      <div className="flexItem">
        <h2 style={{ textAlign: 'center', backgroundColor: 'red' }}>
          Ok Wow How?! <span style={{ fontSize: '0.6em' }}>2024</span>
        </h2>
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="786"
            title="Ok Wow How?!"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/album=67764392/size=large/bgcol=333333/linkcol=e99708/tracklist=true/transparent=true/"
            seamless
          ></iframe>
        </div>
      </div>
      <div className="flexItem">
        <h2 style={{ textAlign: 'center', backgroundColor: 'magenta'  }}>
          Ok Ciao Kakao <span style={{ fontSize: '0.6em' }}>2021</span>
        </h2>
        <div className="bandcampContainer">
          <iframe
            className="bandcamp"
            width="300"
            height="442"
            title="Ok Ciao Kakao"
            loading="lazy"
            src="https://bandcamp.com/EmbeddedPlayer/album=3754664760/size=large/bgcol=333333/linkcol=e99708/tracklist=true/transparent=true/"
            seamless
          />
        </div>
      </div>
    </div>
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
    <style jsx>{`
      .flexItem {
        flex: 1;
      }
      .bandcampContainer {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-width: 320px;
        padding-top: 161%; /* Aspect Ratio */
        margin: 0;
      }

      .bandcampContainer iframe {
        border: 0;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
      }

      .bandcampGrid {
        width: 100%;
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
