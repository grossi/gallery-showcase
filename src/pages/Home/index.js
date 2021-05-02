import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { Container, Text, Box, Center } from "@chakra-ui/react";

const Home = () => {
  const [targetRowHeightSlider, setTargetRowHeightSlider] = React.useState(300);
  const [limitNodeSearchSlider, setLimitNodeSearchSlider] = React.useState(8);
  const [marginSlider, setMarginSlider] = React.useState(2);
  return (
    <Container maxW="container.lg" bgColor="gray.700" py={8}>
      <Center mb={4}>
        <Text fontSize="4xl">React Photo Gallery Test</Text>
      </Center>
      <Box>
        <Text>"targetRowHeightSlider": {targetRowHeightSlider}</Text>
        <Slider
          min={50}
          max={1000}
          step={1}
          aria-label="slider-ex-1"
          defaultValue={targetRowHeightSlider}
          onChange={(value) => setTargetRowHeightSlider(value)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box>
        <Text>"limitNodeSearchSlider": {limitNodeSearchSlider}</Text>
        <Slider
          min={1}
          max={20}
          step={1}
          aria-label="slider-ex-2"
          defaultValue={limitNodeSearchSlider}
          onChange={(value) => setLimitNodeSearchSlider(value)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Box>
        <Text>"marginSlider": {marginSlider}</Text>
        <Slider
          min={0}
          max={16}
          step={1}
          aria-label="slider-ex-2"
          defaultValue={marginSlider}
          onChange={(value) => setMarginSlider(value)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      <Gallery
        photos={photos}
        targetRowHeight={targetRowHeightSlider}
        limitNodeSearch={limitNodeSearchSlider}
        margin={marginSlider}
      />
    </Container>
  );
};

export default Home;
