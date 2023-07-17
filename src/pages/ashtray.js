import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';

register();

const ashtrayData = [
  {
    name: 'Dalai Puma Ashtrays - Leobär',
    images: [
      '/ashtray/leobaer-1.jpg',
      '/ashtray/leobaer-2.jpg',
      '/ashtray/leobaer-3.jpg',
    ],
    text: 'Leobär 320.- SOLD',
  },
  {
    name: 'Dalai Puma Ashtrays - Gürkli',
    images: [
      '/ashtray/guerkli-1.jpg',
      '/ashtray/guerkli-2.jpg',
      '/ashtray/guerkli-3.jpg',
    ],
    text: 'Gürkli 190.-',
  },
  {
    name: 'Dalai Puma Ashtrays - Ssschlange',
    images: ['/ashtray/ssschlange-1.jpg', '/ashtray/ssschlange-2.jpg'],
    text: 'Ssschlange 250.-',
  },
  {
    name: 'Dalai Puma Ashtrays - Zebra',
    images: [
      '/ashtray/zebra-1.jpg',
      '/ashtray/zebra-2.jpg',
      '/ashtray/zebra-3.jpg',
    ],
    text: 'Zebra 220.- SOLD',
  },
  {
    name: 'Dalai Puma Ashtrays - Swimmingpool',
    images: ['/ashtray/swimmingpool-1.jpg', '/ashtray/swimmingpool-2.jpg'],
    text: 'Swimmingpool 510.-',
  },
  {
    name: 'Dalai Puma Ashtrays - Badewanne',
    images: [
      '/ashtray/badewanne-1.jpg',
      '/ashtray/badewanne-2.jpg',
      '/ashtray/badewanne-3.jpg',
    ],
    text: 'Badewanne 320.- ',
  },
  {
    name: 'Dalai Puma Ashtrays - Wellesittich',
    images: [
      '/ashtray/wellesittich-1.jpg',
      '/ashtray/wellesittich-2.jpg',
      '/ashtray/wellesittich-3.jpg',
    ],
    text: 'Wellesittich 290.- SOLD ',
  },
  {
    name: 'Echsenwolf - Dalai Puma Ashtray',
    images: ['/ashtray/echsenwolf-1.jpg', '/ashtray/echsenwolf-2.jpg'],
    text: 'Echsenwolf 290.- SOLD',
  },
  {
    name: 'Dalai Puma Ashtrays - Erdbeeri',
    images: [
      '/ashtray/erdbeeri-1.jpg',
      '/ashtray/erdbeeri-2.jpg',
      '/ashtray/erdbeeri-3.jpg',
    ],
    text: 'Erdbeeri 210.-',
  },
];

const Ashtray = () => {
  return (
    <Layout>
      <SEO title="Ashtrays" />
      <h1>Dalai Puma Ashtrays</h1>
      <p>
        These nine unique ashtrays were created as a collaboration of Ursula
        Vogel of Goodlifeceramics and Ziska Staubli of Dalai Puma.
      </p>
      <div
        style={{
          width: '100%',
          display: 'block',
        }}
      >
        <Image
          src="/ashtray/group.jpg"
          layout="responsive"
          width={700}
          height={475}
          objectFit="contain"
          alt="Dalai Puma Ashtrays"
        />
      </div>
      <div className="ashtrayGrid">
        {ashtrayData.map((tray) => {
          return (
            <div className="ashtrayContainer" key={tray.name}>
              <swiper-container
                spaceBetween={50}
                slidesPerView={1}
                navigation="true"
              >
                {tray.images.map((image) => {
                  return (
                    <swiper-slide key={image} lazy="true">
                      <Image
                        src={image}
                        layout="responsive"
                        width={500}
                        height={500}
                        objectFit="contain"
                        alt={tray.name}
                      />
                    </swiper-slide>
                  );
                })}
              </swiper-container>
              <p>{tray.text}</p>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .ashtrayContainer {
          flex: 1;
          position: relative;
          overflow: hidden;
          max-width: 600px;
          min-width: 320px;
          width: 100%;
          margin: 0;
        }
        .ashtrayGrid {
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
        @media screen and (max-width: 700px) {
          .music {
            font-size: 1.5em;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Ashtray;
