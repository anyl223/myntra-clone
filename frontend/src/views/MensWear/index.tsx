import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import scss from "./menswear.module.scss";
import Autoplay from "embla-carousel-autoplay";
import "@mantine/carousel/styles.css";
import { clsx } from "@/utils/string";
const Menswear = () => {
  const autoplay = useRef(Autoplay({ delay: 1000 }));
  return (
    <>
      <div className={scss.maindiv}>
        <div className="mt-2">
          <Carousel
            loop
            maw={1300}
            mx="auto"
            withIndicators
            height={350}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            <Carousel.Slide>
              <img className={scss.offer} src="./assets/offers/1.jpg" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img className={scss.offer} src="./assets/offers/2.jpeg" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img className={scss.offer} src="./assets/offers/1.jpg" />
            </Carousel.Slide>
          </Carousel>
        </div>

        <div className={scss.cards}>
          <div className={clsx(scss.resizer)}>cfds</div>
          <div className={scss.card2}>cfds</div>
          <div className={scss.card3}>cfds</div>
        </div>
      </div>
    </>
  );
};

export default Menswear;
