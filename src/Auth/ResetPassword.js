import React from "react";
import {
  Checkbox,
  Text,
  Stack,
  Flex,
  Button,
  VStack,
  Input,
  Image,
  Center,
  HStack,
  Box,
} from "@chakra-ui/react";
import logo from "../assets/lo.png";

const ResetPassword = () => {
  return (
    <VStack h="100vh">
      <Image
        borderRadius="full"
        boxSize="180px"
        src={logo}
        color="#fff"
        alt="Logo"
        pt={10}
      />
      <Stack w="100%">
        <Center>
          <Text fontSize="1.8rem" fontWeight="500">
            Change Your Password
          </Text>
        </Center>
        <Center>
          <Box>
            <Text fontWeight="bold" fontSize="0.9rem">
              Password must contain
            </Text>
          </Box>
        </Center>
        <center>
          <Text>
            A mixture of uppercase,lowercase, numbers and symbols. min-length 8
            characters
          </Text>
        </center>
        <Flex justify="center">
          <VStack pt={10}>
            <form>
              <Text pb={2}>New Password</Text>
              <Input
                focusBorderColor="#000000"
                name="password"
                w={["100%", "100%", "50vw", "35vw"]}
                type="password"
                mb={2}
                isInvalid
                errorBorderColor="green.200"
              />
              <Text py={2}>Confirm New Password</Text>

              <Input
                focusBorderColor="#000000"
                name="email"
                w={["90vw", "90vw", "50vw", "35vw"]}
                type="password"
                mb={2}
                isInvalid
                errorBorderColor="green.200"
              />
              <HStack>
                <Checkbox
                  colorScheme="green"
                  display="block"
                  mt={2}
                  size="lg"
                />
                <Text>Show Password</Text>
              </HStack>
              <Flex align="center" gap={2}>
                <Button
                  display="block"
                  width={["100%", "100%", "50vw", "35vw"]}
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
                  Change my password
                </Button>
              </Flex>
            </form>
          </VStack>
        </Flex>
      </Stack>
    </VStack>
  );
};

export default ResetPassword;
