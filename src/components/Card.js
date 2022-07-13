import React from "react";
import { Box, Image, Heading, Flex } from "@chakra-ui/react";
import image from "../assets/t.jpeg";
function Card() {
  return (
    <Flex
      direction={["row", "row", "column", "column"]}
      shadow="base"
      bg="#333333"
      color="#fff"
      borderRadius="md"
      cursor="pointer"
    >
      <Image
        objectFit="cover"
        src={image}
        w={["30vw", "20vw", "40vw", "35vw"]}
        alt="Dan Abramov"
        borderTopRadius="md"
      />
      <Box p={8}>
        <Heading fontSize={[12, 14, 18, 18]} pb={7}>
          Everton, Burnley or Leeds - Who s going down?
        </Heading>
      </Box>
    </Flex>
  );
}
//  <Text py="3" fontSize={18} textAlign= "left" >Want to declutter your sales and support inboxes and drive more revenue? Explore these nine email collaboration software platforms for 2022.</Text>

export default Card;
