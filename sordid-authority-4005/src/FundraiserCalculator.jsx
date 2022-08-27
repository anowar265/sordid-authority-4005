import {
  Box,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const FundraiserCalculator = () => {
  //   const property = {
  //     imageUrl: "https://bit.ly/2Z4KKcF",
  //     imageAlt: "Rear view of modern home with pool",
  //     beds: 3,
  //     baths: 2,
  //     title: "Modern home in city center in the heart of historic Los Angeles",
  //     formattedPrice: "$1,900.00",
  //     reviewCount: 34,
  //     rating: 4,
  //   };
  return (
    <Box>
      <Box fontSize="22px" p={"20px 0 10px"} fontFamily="AvenirLTPro-Book">
        <h3>Fundraiser goal calculator</h3>
        <Box color={"#5d5d5d"} fontSize="14px" p={"0 30px"}>
          A simple way to plan and achieve your fundraiser goal
        </Box>
      </Box>

      <Box
        marginLeft="34%"
        maxW="lg"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
      >
        <Box p="6">
          <Flex d="flex" alignItems="baseline">
            <Box>I want to raise:</Box>
            <Spacer />
            <Flex>
              <Select
                w="30%"
                borderLeft="none"
                borderTop={"none"}
                borderRadius="0px"
                borderRight={"0px"}
              >
                <option value="INR">₹ INR</option>
                <option value="USD">₹ USD</option>
              </Select>
              <NumberInput
                ml="-1"
                borderTopColor="#fff"
                borderLeftColor="#fff"
                borderRightColor="#fff"
                borderRadius={"none"}
              >
                <NumberInputField />
                <NumberInputStepper></NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>
          <Box ml="5%" w="90%" mt={"14"}>
            <Slider defaultValue={10000} min={10000} max={100000} step={3000}>
              <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb bg="#9c3353" boxSize={6} />
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FundraiserCalculator;
