import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Center,
  Stack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import image from "../assets/main.avif";

function Content(props) {
  return (
    <Center pb="440px">
      <Stack position="relative" top="200px" bg="#F0F2F5" w="60vw">
        <Box justify="center">
          <Heading textAlign="center" w="50vw" ml="100px" fontSize="50px">
            The 9 Best Email Collaboration Software Platforms for 2022
          </Heading>
        </Box>
        <HStack justify="center" py={8}>
          <Image
            borderRadius="full"
            boxSize="40px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Text fontWeight="600">Written by Samuel Adams</Text>
          <Text fontWeight="100" pl={4}>
            March 16, 2022
          </Text>
        </HStack>
        <Image
          objectFit="cover"
          src={image}
          alt="Dan Abramov"
          borderRadius="md"
        />
        <Flex justify="center">
          <Text fontSize={24} w="50vw" p={10} pt={95}>
            When it comes to jobs like sales and support, having the right email
            collaboration software can be a game changer. After all, 75% of
            employers say team collaboration is very important. But email was
            built as a one-to-one communication tool, not for sales and support
            teams to collaborate. Teams end up creating group emails such as
            support@company.com to handle incoming emails and to collaborate,
            with the goal of faster response times. The problem is,
            collaborative inboxes don’t tell you who’s working on what, and they
            can be a challenge to manage. Email collaboration software helps you
            easily delegate tasks, speed up response times, and work smarter as
            a team. To help you find the right option for your business, we’ve
            put together the nine best email collaboration software tools for
            teams.
          </Text>
        </Flex>
      </Stack>
    </Center>
  );
}

export default Content;
