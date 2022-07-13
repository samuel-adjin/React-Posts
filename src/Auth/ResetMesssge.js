import React from "react";
import {
  Stack,
  Box,
  Flex,
  Center,
  Image,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/lo.png";

const ResetMesssge = () => {
  return (
    <Flex justify="center">
      <VStack h="100vh">
        <Image
          borderRadius="full"
          boxSize="25%"
          src={logo}
          color="#fff"
          alt="Logo"
          pt={10}
        />
        <Stack>
          <Center>
            <Text fontSize="1.8rem" fontWeight="500">
              Reset Your Password
            </Text>
          </Center>
          <Box px="7vw">
            <Text>Instructions to reset your password have been sent to:</Text>
            <Center>
              <Text fontWeight="bolder" pt={2}>
                samueladams990@gmail.com
              </Text>
            </Center>
            <Center>
              {" "}
              <Text pt={2}>
                if you dont receive it, please{" "}
                <Text as="span" color="green.400">
                  {" "}
                  contact support
                </Text>
              </Text>
            </Center>
          </Box>
          <VStack pt={5}>
            <Flex align="center" gap={2}>
              <Button
                display="block"
                width="150px"
                mt={4}
                mb={5}
                variant="solid"
                h="3.2rem"
                borderRadius="md"
                bg="#42C3AA"
                color="#fff"
                type="submit"
                fontWeight="500"
                colorScheme="green"

                // onClick={handler}
              >
                Back to Login
              </Button>
            </Flex>
          </VStack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default ResetMesssge;
