import React from "react";
import { Image, Stack, Flex, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/lo.png";
import { Outlet } from "react-router-dom";
function Navbar() {
  return (
    <>
      <Stack
        bg="#000000"
        py={2}
        px={8}
        color="#fff"
        direction={["column", "column", "row", "row"]}
        w="full"
        position="fixed"
        zIndex={2}
      >
        <Image
          borderRadius="full"
          boxSize="60px"
          src={logo}
          color="#fff"
          alt="Logo"
        />
        <Spacer />
        <Flex
          gap={[3, 3, 10, 10]}
          direction={["column", "column", "row", "row"]}
        >
          <button as="a">
            <Text fontSize="lg">Home</Text>
          </button>
          <button as="a">
            <Text fontSize="lg">Latest Post</Text>
          </button>
          <button as="a">
            <Text fontSize="lg">Trending Post</Text>
          </button>
          <button as="a">
            <Text fontSize="lg">Old Post</Text>
          </button>
        </Flex>
        <Spacer />
        <Flex
          gap={[3, 3, 10, 10]}
          direction={["column", "column", "row", "row"]}
        >
          <button as="a">
            <Text fontSize="lg">Register</Text>
          </button>
          <button as="a">
            <Text fontSize="lg">Login</Text>
          </button>
        </Flex>
      </Stack>
      <Outlet />
    </>
  );
}

export default Navbar;
