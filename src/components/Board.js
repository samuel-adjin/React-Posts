import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Badge,
  Tr,
  Th,
  Td,
  Icon,
  TableContainer,
  Flex,
  Avatar,
  Text,
  Input,
  Box,
  Select,
  Button,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { BsFillTrashFill, BsEyeFill } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
const Board = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const {
    isOpen: isEyeOpen,
    onOpen: onEyeOpen,
    onClose: onEyeClose,
  } = useDisclosure();

  return (
    <>
      <TableContainer shadow="base">
        <Flex
          bg="#F0F2F5"
          p={5}
          gap={["2", "2", "20", "20"]}
          direction={["column", "column", "row", "row"]}
        >
          <Box w={["100%", "100%", "30%", "30%"]}>
            <Input
              variant="flushed"
              placeholder="Enter Username"
              color="#595959"
              focusBorderColor="green.500"
              errorBorderColor="green.300"
              isInvalid
            />
          </Box>
          <Box w={["100%", "100%", "30%", "30%"]}>
            <Select
              variant="flushed"
              placeholder="Status"
              focusBorderColor="green.500"
              errorBorderColor="green.300"
              isInvalid
            >
              <option value="option1">Locked</option>
              <option value="option2">Active</option>
            </Select>
          </Box>
          <Button
            leftIcon={<FaSearch />}
            colorScheme="teal"
            variant="solid"
            px={10}
          >
            Search
          </Button>
          <Button
            leftIcon={<BsFillTrashFill />}
            colorScheme="red"
            variant="solid"
            px={10}
            bg="red.400"
            onClick={onDeleteOpen}
          >
            Delete
          </Button>
          <Button
            leftIcon={<AiOutlineUserAdd size="25" />}
            colorScheme="teal"
            variant="outline"
            px={10}
            onClick={onOpen}
          >
            Add User
          </Button>
        </Flex>

        <Table variant="striped" colorScheme="blackAlpha" bg="#fff">
          <Thead bg="#F0F2F5">
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Username</Th>
              <Th>Last Login</Th>
              <Th>Account Status</Th>
              <Th>Mobile</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Flex align="center">
                  <Checkbox colorScheme="green" pr={4} size="lg"></Checkbox>
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
              <Td>Yesterday</Td>
              <Td>
                <Badge variant="subtle" colorScheme="green" ml={5} px={3}>
                  Active
                </Badge>
              </Td>
              <Td>0573095386</Td>
              <Td>
                <Flex align="center" gap={4}>
                  <Icon
                    as={BsFillTrashFill}
                    color="red.500"
                    w={5}
                    h={5}
                    onClick={onDeleteOpen}
                    cursor="pointer"
                  />
                  <Icon
                    as={BsEyeFill}
                    w={5}
                    h={5}
                    cursor="pointer"
                    onClick={onEyeOpen}
                  />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex align="center">
                  <Checkbox colorScheme="green" pr={4} size="lg"></Checkbox>
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
              <Td>Yesterday</Td>
              <Td>
                <Badge variant="subtle" colorScheme="red" ml={5} px={3}>
                  Locked
                </Badge>
              </Td>
              <Td>0573095386</Td>
              <Td>
                <Flex align="center" gap={4}>
                  <Icon
                    as={BsFillTrashFill}
                    color="red.500"
                    w={5}
                    h={5}
                    cursor="pointer"
                  />
                  <Icon as={BsEyeFill} w={5} h={5} cursor="pointer" />
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Flex align="center">
                  <Checkbox colorScheme="green" pr={4} size="lg"></Checkbox>
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
              <Td>Yesterday</Td>
              <Td>
                <Badge variant="subtle" colorScheme="green" ml={5} px={3}>
                  Active
                </Badge>
              </Td>
              <Td>0573095386</Td>
              <Td>
                <Flex align="center" gap={4}>
                  <Icon
                    as={BsFillTrashFill}
                    w={5}
                    h={5}
                    color="red.500"
                    cursor="pointer"
                  />
                  <Icon as={BsEyeFill} w={5} h={5} cursor="pointer" />
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input placeholder="First name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Middle name</FormLabel>
                <Input placeholder="Middle name" />
              </FormControl>

              <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input placeholder="Last name" />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>email</FormLabel>
                <Input placeholder="Email" />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        blockScrollOnMount={false}
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete User(s)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1rem">
              Are you sure you want to delete these (3) users
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Yes
            </Button>
            <Button colorScheme="red">No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal blockScrollOnMount={false} isOpen={isEyeOpen} onClose={onEyeClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1rem">User details Goes here</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Yes
            </Button>
            <Button colorScheme="red">No</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Board;
