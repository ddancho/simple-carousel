import {
  Container,
  CarouselContainer,
  CarouselWrapper,
  CarouselItem,
  CarouselImg,
} from "./styled/Carousel.styled";
import { useState, useEffect, useRef } from "react";
import images from "../utils/images";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <Container>
      <CarouselContainer ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
        <CarouselWrapper drag='x' dragConstraints={{ right: 0, left: -width }}>
          {images.map((image, i) => {
            return (
              <CarouselItem key={i}>
                <CarouselImg src={image} alt='' />
              </CarouselItem>
            );
          })}
        </CarouselWrapper>
      </CarouselContainer>
    </Container>
  );
}
