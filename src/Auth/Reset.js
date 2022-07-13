import React from "react";
import {
  Box,
  Text,
  Stack,
  Flex,
  Button,
  VStack,
  Input,
  Image,
  Center,
} from "@chakra-ui/react";
import logo from "../assets/lo.png";

const Reset = () => {
  return (
    <VStack h="100vh">
      <Image
        borderRadius="full"
        boxSize={["20%", "20%", "12vw", "12vw"]}
        src={logo}
        color="#fff"
        alt="Logo"
        pt={10}
        ml={{ lg: "10vw" }}
      />
      <Stack w={["100%", "100%", "75%", "55%"]} pl={[2, 2, 10, "10vw"]}>
        <Center>
          <Text fontSize="1.8rem" fontWeight="500">
            Reset Your Password
          </Text>
        </Center>
        <Center>
          <Box w={["95vw", "95vw", "65vw", "40vw"]} px={5}>
            Please enter the email you used on creation of your account. A
            password reset link will be sent to the email entered. If you dont
            have access to the account email anymore you can try
            <Text as="span" color="green" fontWeight="bold">
              {" "}
              Account recovery
            </Text>
          </Box>
        </Center>
        <VStack pt={5} w="100%">
          <form>
            <Text pb={2}>Email</Text>
            <Input
              focusBorderColor="#000000"
              placeholder="Email"
              name="email"
              w={["90vw", "90vw", "40vw", "40vw"]}
              mb={2}
              isInvalid
              errorBorderColor="green.200"
            />
            <Flex align="center" gap={2}>
              <Button
                display="block"
                width={["45vw", "45vw", "18vw", "15vw"]}
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
                Reset Password
              </Button>

              <Box cursor="pointer">
                <Text color="green">Return to login</Text>
                <Box borderTop="2px" color="green"></Box>
              </Box>
            </Flex>
          </form>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Reset;
