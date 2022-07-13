import React from "react";
import {
  Box,
  Flex,
  HStack,
  Divider,
  Heading,
  Image,
  Hide,
} from "@chakra-ui/react";

import logo from "../assets/lo.png";
import Side from "../components/Side";
import { batch2 } from "../data/SideBarData";
import { batch1 } from "../data/SideBarData";
import { batch3 } from "../data/SideBarData";
import NavBottom from "../components/NavBottom";

const NSidebar = () => {
  let sidetop = batch1.map((data, i) => {
    return <Side name={data.name} icon={data.icon} link={data.link} key={i} />;
  });

  let sidebottom = batch2.map((data, i) => {
    return <Side name={data.name} icon={data.icon} key={i} />;
  });

  let navBottom = batch3.map((data, i) => {
    return <NavBottom name={data.name} key={i} />;
  });

  return (
    <>
      <Flex justify="space-between">
        <Hide below="lg">
          <Box
            width={{ base: "500px", lg: "300px" }}
            display={{ base: "none", lg: "block" }}
            h="100vh"
            color="gray.100"
            bg="#fff"
            shadow="base"
            position="fixed"
          >
            <Flex h="10vh" alignItems="center" gap={4}>
              <Image
                borderRadius="full"
                boxSize="60px"
                src={logo}
                color="#fff"
                alt="Logo"
                ml={3}
              />
              <Heading as="h4" size="md" mr={5} color="#42C3AA">
                FaradPost
              </Heading>
            </Flex>
            <Box p={10}>
              {sidetop}
              <Box mt="15%">{sidebottom}</Box>
            </Box>
            <HStack mt="7%" mb={5}>
              <Divider />
            </HStack>
            {navBottom}
          </Box>
        </Hide>
      </Flex>
    </>
  );
};

export default NSidebar;
