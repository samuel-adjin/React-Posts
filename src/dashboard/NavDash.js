import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Input,
  Icon,
  Text,
  Hide,
  HStack,
} from "@chakra-ui/react";
import { IoMdArrowDropdown, IoIosNotificationsOutline } from "react-icons/io";

const NavDash = () => {
  return (
    <Hide below="lg" position="fixed">
      <Flex
        width={{ base: "100%", lg: "calc(100% - 300px)" }}
        height="15vh"
        position={{ lg: "absolute" }}
        right={{ lg: "0" }}
      >
        <Flex
          mx={8}
          h="8vh"
          my={5}
          alignItems="center"
          width={{ base: "100%", lg: "100%" }}
          p={2}
          bg="#FFFFFF"
          justify="space-between"
          shadow="base"
          borderRadius="lg"
        >
          <Box w="40%" pl={4}>
            <Input variant="filled" placeholder="search" borderRadius="full" />
          </Box>
          <Flex alignItems="center" gap={5}>
            <HStack alignItems="center" gap={5}>
              <Icon
                as={IoIosNotificationsOutline}
                w={6}
                h={6}
                color="green.500"
                cursor="pointer"
              />

              <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <HStack>
                <Text color="#595959">Samuel Adams Adjin</Text>
                <Icon
                  as={IoMdArrowDropdown}
                  w={4}
                  h={4}
                  color="green.500"
                  cursor="pointer"
                />
              </HStack>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </Hide>
  );
};

export default NavDash;
