import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import ashtrayGroupPic from '../../public/ashtray/group.jpg';
import leobaerPic1 from '../../public/ashtray/leobaer-1.jpg';
import leobaerPic2 from '../../public/ashtray/leobaer-2.jpg';
import leobaerPic3 from '../../public/ashtray/leobaer-3.jpg';
import guerkliPic1 from '../../public/ashtray/guerkli-1.jpg';
import guerkliPic2 from '../../public/ashtray/guerkli-2.jpg';
import guerkliPic3 from '../../public/ashtray/guerkli-3.jpg';
import ssschlangePic1 from '../../public/ashtray/ssschlange-1.jpg';
import ssschlangePic2 from '../../public/ashtray/ssschlange-2.jpg';
import ssschlangePic3 from '../../public/ashtray/ssschlange-3.jpg';
import zebraPic1 from '../../public/ashtray/zebra-1.jpg';
import zebraPic2 from '../../public/ashtray/zebra-2.jpg';
import zebraPic3 from '../../public/ashtray/zebra-3.jpg';
import swimmingpoolPic1 from '../../public/ashtray/swimmingpool-1.jpg';
import swimmingpoolPic2 from '../../public/ashtray/swimmingpool-2.jpg';
import swimmingpoolPic3 from '../../public/ashtray/swimmingpool-3.jpg';
import badewannePic1 from '../../public/ashtray/badewanne-1.jpg';
import badewannePic2 from '../../public/ashtray/badewanne-2.jpg';
import badewannePic3 from '../../public/ashtray/badewanne-3.jpg';
import wellesittichPic1 from '../../public/ashtray/wellesittich-1.jpg';
import wellesittichPic2 from '../../public/ashtray/wellesittich-2.jpg';
import wellesittichPic3 from '../../public/ashtray/wellesittich-3.jpg';
import echsenwolfPic1 from '../../public/ashtray/echsenwolf-1.jpg';
import echsenwolfPic2 from '../../public/ashtray/echsenwolf-2.jpg';
import echsenwolfPic3 from '../../public/ashtray/echsenwolf-3.jpg';
import erdbeeriPic1 from '../../public/ashtray/erdbeeri-1.jpg';
import erdbeeriPic2 from '../../public/ashtray/erdbeeri-2.jpg';
import erdbeeriPic3 from '../../public/ashtray/erdbeeri-3.jpg';

register();

const ashtrayData = [
  {
    name: 'Dalai Puma Ashtrays - Leobär',
    images: [leobaerPic1, leobaerPic2, leobaerPic3],
    text: 'Leobär 320.- SOLD',
  },
  {
    name: 'Dalai Puma Ashtrays - Gürkli',
    images: [guerkliPic1, guerkliPic2, guerkliPic3],
    text: 'Gürkli 190.-',
  },
  {
    name: 'Dalai Puma Ashtrays - Ssschlange',
    images: [ssschlangePic1, ssschlangePic2, ssschlangePic3],
    text: 'Ssschlange 250.-',
  },
  {
    name: 'Dalai Puma Ashtrays - Zebra',
    images: [zebraPic1, zebraPic2, zebraPic3],
    text: 'Zebra 220.- SOLD',
  },
  {
    name: 'Dalai Puma Ashtrays - Swimmingpool',
    images: [swimmingpoolPic1, swimmingpoolPic2, swimmingpoolPic3],
    text: 'Swimmingpool 510.-',
  },
  {
    name: 'Dalai Puma Ashtrays - Badewanne',
    images: [badewannePic1, badewannePic2, badewannePic3],
    text: 'Badewanne 320.- ',
  },
  {
    name: 'Dalai Puma Ashtrays - Wellesittich',
    images: [wellesittichPic1, wellesittichPic2, wellesittichPic3],
    text: 'Wellesittich 290.- SOLD ',
  },
  {
    name: 'Echsenwolf - Dalai Puma Ashtray',
    images: [echsenwolfPic1, echsenwolfPic2, echsenwolfPic3],
    text: 'Echsenwolf 250.-',
  },
  {
    name: 'Dalai Puma Ashtrays - Erdbeeri',
    images: [erdbeeriPic1, erdbeeriPic2, erdbeeriPic3],
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
      <Image
        src={ashtrayGroupPic}
        placeholder="blur"
        alt="Dalai Puma Ashtrays"
        style={{
          width: '100%',
          height: 'auto',

          marginBottom: 16,
        }}
      />
      <div className="ashtrayGrid">
        {ashtrayData.map((tray) => {
          return (
            <div className="ashtrayContainer" key={tray.name}>
              <swiper-container
                spaceBetween={0}
                slidesPerView={1}
                navigation="true"
              >
                {tray.images.map((image) => {
                  return (
                    <swiper-slide key={image}>
                      <Image
                        src={image}
                        width={500}
                        height={500}
                        alt={tray.name}
                        placeholder="blur"
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                        }}
                      />
                    </swiper-slide>
                  );
                })}
              </swiper-container>
              <p>{tray.text}</p>
            </div>
          );
        })}
      <div className="ashtrayContainer" key="extra"></div>
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
