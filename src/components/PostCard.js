import React from "react";
import { Box, Icon, Text, Flex, Image, Stack } from "@chakra-ui/react";
import pimg from "../assets/img-03.jpg";
import { AiFillHeart } from "react-icons/ai";
import { FaCalendarDay } from "react-icons/fa";

const PostCard = () => {
  return (
    <Stack
      w={["90%", "95%", "45%", "30%"]}
      bg="#fff"
      shadow="base"
      borderRadius={5}
    >
      <Image
        borderTopRadius={5}
        boxSize={["100%", "100%", "100%", "100%"]}
        height={["30vh", "30vh", "40vh", "40vh"]}
        src={pimg}
        color="#fff"
        alt="Logo"
      />
      <Stack justify="center" pl={5}>
        <Flex justify="space-between" align="center" pt={3}>
          <Text color="green.300" fontWeight="500" fontSize="1rem">
            Walking on Air
          </Text>
          <Flex align="center" justify="start" mr={15} gap={1}>
            <Icon as={AiFillHeart} w={3} h={3} color="#FF8955" />
            <Text fontSize="1rem">12.7k</Text>
          </Flex>
        </Flex>
        <Box position="relative" bottom="2">
          <Text color="#9699A6">Artwork</Text>
        </Box>
      </Stack>
      <Stack borderTop="2px" color="gray.200" pl={5} pb={10}>
        <Flex pt={4} gap={2} px={3}>
          <Icon as={FaCalendarDay} w={6} h={6} color="green.300" />
          <Text color="#595959">Date:</Text>
          <Text color="gray.400">1st February</Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default PostCard;
