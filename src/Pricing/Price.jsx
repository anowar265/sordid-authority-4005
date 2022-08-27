import { Box } from "@chakra-ui/react";
import React from "react";
import Accordions from "./Accordions";
import ChooseMilaap from "./ChooseMilaap";
import FundraiserCalculator from "./FundraiserCalculator";
import PricingTop from "./PricingTop";

const Price = () => {
  return (
    <div>
      <PricingTop />
      <br />
      <FundraiserCalculator />
      <ChooseMilaap />

      <Box
        backgroundColor="#9c3353;"
        width="100%"
        textAlign="center"
        height="100px"
        color="white"
        fontSize="22px"
        fontWeight="400"
        padding="34px"
      >
        <h2
          style={{
            color: "white",
          }}
        >
          Read what people are saying about Milaap!
        </h2>
      </Box>
      <Accordions />
    </div>
  );
};

export default Price;
