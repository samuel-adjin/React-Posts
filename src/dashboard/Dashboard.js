import React from "react";
import { Box, Text, Icon, Flex, Stack } from "@chakra-ui/react";
import { GiBookPile } from "react-icons/gi";
import { FaUsers, FaChartPie } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import Board from "../components/Board";

const Dashboard = () => {
  return (
    <Stack w="100%">
      <Flex
        pl={["4vw", "3vw", "12vw", "0"]}
        mt={{ sm: "10", lg: "0" }}
        direction={["row", "row", "row", "row"]}
        width="100%"
        gap={10}
        justify="start"
        wrap="wrap-reverse"
      >
        <Flex
          justify="space-around"
          alignItems="center"
          bgGradient="linear(to-r, #1EDDDA, #5981E8)"
          shadow="base"
          color="#fff"
          width={["90vw", "43vw", "30vw", "16vw"]}
          p={5}
          gap={3}
          borderRadius="sm"
        >
          <Box>
            <Text>2050</Text>
            <Text>Total Posts</Text>
          </Box>
          <Icon as={GiBookPile} w={20} h={20} cursor="pointer" />
        </Flex>

        <Flex
          justify="space-around"
          alignItems="center"
          bgGradient="linear(to-r, #F75796, #FE717A)"
          shadow="base"
          color="#fff"
          width={["90vw", "43vw", "30vw", "16vw"]}
          p={5}
          gap={3}
          borderRadius="sm"
        >
          <Box>
            <Text>3250</Text>
            <Text>Total Users</Text>
          </Box>
          <Icon as={FaUsers} w={20} h={20} cursor="pointer" />
        </Flex>

        <Flex
          justify="space-around"
          alignItems="center"
          bgGradient="linear(to-r, #41DF99, #3BB6B4)"
          shadow="base"
          color="#fff"
          width={["90vw", "43vw", "30vw", "16vw"]}
          p={5}
          gap={3}
          borderRadius="sm"
        >
          <Box>
            <Text>87.5%</Text>
            <Text>Statistics</Text>
          </Box>
          <Icon as={FaChartPie} w={20} h={20} cursor="pointer" />
        </Flex>

        <Flex
          justify="space-around"
          alignItems="center"
          bgGradient="linear(to-r, #FFD642, #FF8955)"
          shadow="base"
          color="#fff"
          width={["90vw", "43vw", "30vw", "16vw"]}
          p={5}
          gap={3}
          borderRadius="sm"
        >
          <Box>
            <Text>1.5k</Text>
            <Text>Total Likes</Text>
          </Box>
          <Icon as={AiFillLike} w={20} h={20} cursor="pointer" />
        </Flex>
      </Flex>

      <Stack mt="245px">
        <Text
          ml={10}
          mt="67px"
          fontWeight="bold"
          fontSize="18px"
          color="#595959"
        >
          List of all Users
        </Text>
        <Board />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
