import React from "react";
import { Spacer, useDisclosure } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import logo from "../assets/lo.png";
import NSidebar from "./NSidebar";
import NavDash from "./NavDash";
import { Outlet } from "react-router-dom";

import {
  Box,
  Icon,
  Text,
  Flex,
  Avatar,
  HStack,
  Divider,
  Heading,
  Image,
  Show,
  DrawerOverlay,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  Stack,
} from "@chakra-ui/react";
import Side from "../components/Side";
import { batch1 } from "../data/SideBarData";
import { batch2 } from "../data/SideBarData";
import { batch3 } from "../data/SideBarData";
import NavBottom from "../components/NavBottom";

const DashSide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let sidetop = batch1.map((data, i) => {
    return <Side name={data.name} icon={data.icon} key={i} />;
  });

  let sidebottom = batch2.map((data, i) => {
    return <Side name={data.name} icon={data.icon} key={i} />;
  });

  let navBottom = batch3.map((data, i) => {
    return <NavBottom name={data.name} key={i} />;
  });

  return (
    <Stack w="100%" height="50vh">
      <Show below="lg">
        <HStack bg="#fff" shadow="base">
          <Icon
            as={FaBars}
            w={8}
            h={8}
            color="green.500"
            my={5}
            mx={10}
            cursor="pointer"
            onClick={onOpen}
          />
          <Box w="30%">
            <Input variant="filled" placeholder="search" />
          </Box>
          <Spacer />
          <Avatar
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text fontSize="0.7em" fontWeight="600" color="gray.400">
            Samuel Adams Adjin
          </Text>
          <Flex pr={5}>
            <Icon
              as={IoMdArrowDropdown}
              w={4}
              h={4}
              color="green.500"
              cursor="pointer"
            />
          </Flex>
        </HStack>
      </Show>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg="#42C3AA">
            <Flex h="5vh" alignItems="center" gap={4}>
              <Image
                borderRadius="full"
                boxSize="60px"
                src={logo}
                color="#fff"
                alt="Logo"
                ml={3}
              />
              <Heading as="h4" size="md" mr={5} color="gray.300">
                FaradPost
              </Heading>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {sidetop}
            <Box mt="15%">{sidebottom}</Box>
            <HStack mt="25%" mb={5}>
              <Divider />
            </HStack>
            {navBottom}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex>
        <NSidebar />
        <Box w="100%">
          <NavDash />
          <Stack
            width={{ base: "100%", lg: "calc(100% - 300px)" }}
            position={{ lg: "absolute" }}
            right={{ lg: "0" }}
            top={{ lg: "15vh" }}
          >
            <Box mx={{ md: "8" }}>
              <Outlet />
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};

export default DashSide;
