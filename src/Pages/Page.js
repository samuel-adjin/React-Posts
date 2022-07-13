import {
  Stack,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import image from "../assets/t.jpeg";
import Card from "../components/Card";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Page() {
  return (
    <Stack
      mx={["0px", "0px", "15px", "0px"]}
      pt={["390px", "390px", "200px", "200px"]}
      pb={90}
    >
      <Flex
        direction={["column", "column", "row", "row"]}
        justify={["start", "start", "center", "center"]}
        gap={["0px", "0px", "30px", "30px"]}
      >
        <Box
          w={["100vw", "100vw", "90vw", "45vw"]}
          shadow="base"
          bg="#333333"
          color="#fff"
          mb={3}
          borderRadius="md"
        >
          <Image
            objectFit="cover"
            src={image}
            alt="Dan Abramov"
            borderTopRadius="md"
          />
          <Box p={10}>
            <Heading>Everton, Burnley or Leeds - Who s going down?</Heading>
            <Text fontWeight="700" py={10}>
              The Toffees claimed a morale-boosting win over Chelsea at the
              weekend but the Merseysiders face a rougher run-in than their
              rivals
            </Text>
          </Box>
        </Box>
        <Stack>
          <Box w={["100vw", "100vw", "40vw", "25vw"]}>
            <Card />
          </Box>
          <Box w={["100vw", "100vw", "40vw", "25vw"]}>
            <Card />
          </Box>
        </Stack>
      </Flex>

      <Flex justify="space-around" mb={55} align="center" pt={10}>
        <Heading fontSize={["12px", "18px", "24px", "24px"]}>
          Most Recent Posts
        </Heading>
        <HStack>
          <Text align="center" fontWeight={700} color="blue.300">
            View All Recent Post
          </Text>{" "}
          <Icon as={ChevronRightIcon} color="blue.300" />{" "}
        </HStack>
      </Flex>
      <Divider borderColor="gray.300" pt={5} />

      <Flex
        direction={["column", "column", "row", "row"]}
        justify={["start", "start", "center", "center"]}
        gap={["8px", "8px", "50px", "50px"]}
        pt={10}
      >
        <Box w={["100vw", "100vw", "40vw", "25vw"]}>
          <Card />
        </Box>

        <Box w={["100vw", "100vw", "40vw", "25vw"]}>
          <Card />
        </Box>

        <Box w={["100vw", "100vw", "40vw", "25vw"]}>
          <Card />
        </Box>
      </Flex>

      <Flex justify="space-around" mb={55} align="center" pt={10}>
        <Heading fontSize={["12px", "18px", "24px", "24px"]}>Posts</Heading>
        <HStack cursor="pointer">
          <Text align="center" fontWeight={700} color="blue.300">
            View All Post
          </Text>{" "}
          <Icon as={ChevronRightIcon} color="blue.300" />{" "}
        </HStack>
      </Flex>
      <Divider borderColor="gray.300" pt={5} />

      <Flex
        direction={["column", "column", "row", "row"]}
        justify={["start", "start", "center", "center"]}
        gap={["8px", "8px", "50px", "50px"]}
        pt={10}
      >
        <Box w={["100vw", "100vw", "40vw", "25vw"]}>
          <Card />
        </Box>

        <Box w={["100vw", "100vw", "40vw", "25vw"]}>
          <Card />
        </Box>

        <Box w={["100vw", "100vw", "40vw", "25vw"]}>
          <Card />
        </Box>
      </Flex>
    </Stack>
  );
}

export default Page;
