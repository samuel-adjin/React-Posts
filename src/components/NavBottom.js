import React from "react";

import { Box, Icon, Text, Flex, Avatar, Center } from "@chakra-ui/react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdAdd } from "react-icons/md";

const NavBottom = (props) => {
  return (
    <>
      <Flex justify="space-around" alignItems="center" p={3} wrap="wrap">
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Text fontSize="0.9em" fontWeight="600" color="#595959">
          {props.name}
        </Text>
        <Icon as={BiDotsHorizontalRounded} w={6} h={6} color="green.500" />
      </Flex>
      <Center>
        <Box
          as="button"
          width="200px"
          mt={4}
          mb={10}
          variant="solid"
          h="3rem"
          borderRadius="xl"
          bg="#42C3AA"
          color="#fff"
          type="submit"
          fontWeight="500"
        >
          <Flex justify="center" alignItems="center" gap={3}>
            <Icon as={MdAdd} w={6} h={6} />
            <Text> New Post</Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
};

export default NavBottom;
