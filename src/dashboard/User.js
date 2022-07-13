import React from "react";
import {
  Flex,
  Stack,
  Avatar,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Board from "../components/Board";

const User = () => {
  return (
    <Stack>
      <Flex gap={6} direction={["column", "column", "row", "row"]} wrap="wrap">
        <Stack
          w={["100%", "400px", "400px", "350px"]}
          shadow="base"
          borderRadius={4}
          align="center"
          p={16}
          bg="#fff"
          m={["9vw", "9vw", "0", "0"]}
        >
          <Text
            fontSize={["0.8rem", "1rem", "1rem", "1rem"]}
            fontWeight="bold"
            pb={4}
          >
            Reporter of the month
          </Text>
          <Avatar
            boxSize={40}
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text
            fontWeight="bold"
            fontSize={["0.6rem", "0.8rem", "0.8rem", "0.8rem"]}
            pt={4}
            px={5}
          >
            Samuel Adams Adjin
          </Text>
          <Text fontSize="0.7rem" pb={5}>
            Entertainment
          </Text>
          <Button px={8} bg="green.400" color="#fff">
            View Details
          </Button>
        </Stack>
        <Stack w={["95%", "95%", "65%", "65%"]}>
          <TableContainer shadow="base" p={4}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Username</Th>
                  <Th>Post</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr bg="#fff" borderRadius={5} shadow="base">
                  <Td>
                    <Flex align="center">
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                        size="sm"
                        mr="4"
                      />
                      <Text>Samuel Adams Adjin</Text>
                    </Flex>
                  </Td>
                  <Td>samueladams@gmail.com</Td>
                  <Td>Faraday123</Td>
                  <Td>Walking on Air</Td>
                </Tr>

                <Tr bg="#fff" borderRadius={5} shadow="base">
                  <Td>
                    <Flex align="center">
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                        size="sm"
                        mr="4"
                      />
                      <Text>Samuel Adams Adjin</Text>
                    </Flex>
                  </Td>
                  <Td>samueladams@gmail.com</Td>
                  <Td>Faraday123</Td>
                  <Td>Walking on Air</Td>
                </Tr>

                <Tr bg="#fff" borderRadius={5} shadow="base">
                  <Td>
                    <Flex align="center">
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                        size="sm"
                        mr="4"
                      />
                      <Text>Samuel Adams Adjin</Text>
                    </Flex>
                  </Td>
                  <Td>samueladams@gmail.com</Td>
                  <Td>Faraday123</Td>
                  <Td>Walking on Air</Td>
                </Tr>

                <Tr bg="#fff" borderRadius={5} shadow="base">
                  <Td>
                    <Flex align="center">
                      <Avatar
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                        size="sm"
                        mr="4"
                      />
                      <Text>Samuel Adams Adjin</Text>
                    </Flex>
                  </Td>
                  <Td>samueladams@gmail.com</Td>
                  <Td>Faraday123</Td>
                  <Td>Walking on Air</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Flex>
      <Stack direction={["column", "column", "row", "row"]} py={10}>
        <Board />
      </Stack>
    </Stack>
  );
};

export default User;
