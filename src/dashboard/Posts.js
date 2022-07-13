import React from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Image,
  Button,
  Badge,
  Icon,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import pimg from "../assets/h3.png";
import { MdBuild, MdCreate } from "react-icons/md";
import { GiPostStamp } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import PostCard from "../components/PostCard";
import Table from "../components/Board";

const Posts = () => {
  return (
    <Stack>
      <Flex
        direction={["column", "column", "row", "row"]}
        color="#595959"
        mt={5}
        p={["5", "5", "5", "0"]}
        wrap="wrap-reverse"
        gap={8}
        justify="start"
        overflow="hidden"
      >
        <Flex shadow="base" borderRadius={5} bg="#fff" justify="space-between">
          <Box p={3}>
            <Text fontWeight="bold" fontSize="20">
              Discover, Collect, Sell, and
            </Text>
            <Text fontWeight="bold" fontSize="20">
              Create
            </Text>
            <Text fontWeight="bold" fontSize="20">
              your Own NFT
            </Text>
            <Text fontWeight="bold" fontSize="14" mt={4} color="gray.400">
              The world first and largest digital
            </Text>
            <Text fontWeight="bold" fontSize="14" mb={8} color="gray.400">
              marketplace
            </Text>

            <Stack direction="row" spacing={4} my={3}>
              <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
                Settings
              </Button>
              <Button
                rightIcon={<MdCreate />}
                colorScheme="blue"
                variant="outline"
              >
                Create Post
              </Button>
            </Stack>
          </Box>
          <Image
            borderRadius="full"
            boxSize="160px"
            src={pimg}
            color="#fff"
            alt="Logo"
          />
        </Flex>

        <Stack shadow="base" borderRadius={5} bg="#fff" p={5}>
          <Flex justify="start" align="center" gap={5} mb={8}>
            <Badge p={3}>
              <Icon
                as={GiPostStamp}
                w={6}
                h={8}
                color="green.400"
                cursor="pointer"
              />
            </Badge>
            <Text color="gray.400" fontSize="18">
              Your Posts
            </Text>
            <Spacer />
            <Menu>
              <MenuButton>
                <Icon
                  as={BsThreeDotsVertical}
                  w={6}
                  h={8}
                  color="green.400"
                  cursor="pointer"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Text fontWeight="bold" fontSize="18">
            5555,677,878
          </Text>
          <Flex gap={4} align="center">
            <Badge colorScheme="red" p={2} fontSize="16">
              35%
            </Badge>
            <Text>vs previous month</Text>
          </Flex>
        </Stack>

        <Stack shadow="base" borderRadius={5} bg="#fff" p={5}>
          <Flex justify="start" align="center" gap={5} mb={8}>
            <Badge p={3}>
              <Icon
                as={TbUsers}
                w={6}
                h={8}
                color="green.400"
                cursor="pointer"
              />
            </Badge>
            <Text color="gray.400" fontSize="18">
              Others Posts
            </Text>
            <Spacer />
            <Menu>
              <MenuButton>
                <Icon
                  as={BsThreeDotsVertical}
                  w={6}
                  h={8}
                  color="green.400"
                  cursor="pointer"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Text fontWeight="bold" fontSize="18">
            5555,677,878
          </Text>
          <Flex gap={4} align="center">
            <Badge colorScheme="red" p={2} fontSize="16">
              35%
            </Badge>
            <Text>vs previous month</Text>
          </Flex>
        </Stack>
      </Flex>
      <Flex
        mt={5}
        py={3}
        w="100%"
        justify="start"
        direction={["column", "column", "row", "row"]}
        wrap="wrap"
      >
        <Stack w={["100%", "100%", "100%", "100%"]}>
          <Flex w="95%" justify="space-between" p={4}>
            <Text fontSize="1.3rem">Top Five(5) Posts for the Month</Text>
            <Flex gap={5}>
              <Flex shadow="base" borderRadius={2} align="center" bg="#E1E2EE">
                <Icon
                  as={MdOutlineKeyboardArrowLeft}
                  w={8}
                  h={8}
                  color="green.400"
                  cursor="pointer"
                />
              </Flex>
              <Flex shadow="base" align="center" bg="#E1E2EE">
                <Icon
                  as={MdOutlineKeyboardArrowRight}
                  w={8}
                  h={8}
                  color="green.400"
                  cursor="pointer"
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            justify={["center", "center", "start", "start"]}
            gap={8}
            direction={["column", "column", "row", "row"]}
            pl={["4vw", "4vw", "0", "0"]}
            pb={12}
          >
            <PostCard />
            <PostCard />
            <PostCard />
          </Flex>
          <Table />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Posts;
