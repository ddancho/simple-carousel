import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100vw;
`;

export const CarouselContainer = styled(motion.div)`
  margin: 40px 20%;
  overflow: hidden;
  cursor: grab;
  border-radius: 8px;
  border: 1px solid lightgray;
`;

export const CarouselWrapper = styled(motion.div)`
  display: flex;
`;

export const CarouselItem = styled(motion.div)`
  min-height: 150px;
  min-width: 300px;
  padding: 40px;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
