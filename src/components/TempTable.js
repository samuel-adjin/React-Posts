import React from "react";
import {
  Table,
  Thead,
  Tbody,
  TagLabel,
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
  Switch,
  FormLabel,
  FormControl,
  Tag,
  TagCloseButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { BsEyeFill, BsThreeDotsVertical } from "react-icons/bs";

const TempTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        </Flex>

        <Table variant="striped" colorScheme="blackAlpha" bg="#fff">
          <Thead bg="#F0F2F5">
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Permissions</Th>
              <Th>Status</Th>
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
              <Td>Admin</Td>
              <Td>
                <Flex wrap="wrap" gap={2}>
                  <Tag
                    size="sm"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLabel>Green</TagLabel>
                    <TagCloseButton />
                  </Tag>
                </Flex>
              </Td>
              <Td>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Active
                  </FormLabel>
                  <Switch id="email-alerts" />
                </FormControl>
              </Td>
              <Td>
                <Flex align="center" gap={4}>
                  <Icon
                    as={BsEyeFill}
                    w={5}
                    h={5}
                    cursor="pointer"
                    onClick={onOpen}
                  />
                  <Menu>
                    <MenuButton>
                      <Icon
                        as={BsThreeDotsVertical}
                        w={5}
                        h={5}
                        color="green.500"
                        cursor="pointer"
                      />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                  </Menu>
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
              <Td>User</Td>
              <Td>User</Td>
              <Td>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Active
                  </FormLabel>
                  <Switch id="email-alerts" />
                </FormControl>
              </Td>
              <Td>
                <Flex align="center" gap={4}>
                  <Icon as={BsEyeFill} w={5} h={5} cursor="pointer" />
                  <Icon
                    as={BsThreeDotsVertical}
                    color="green.500"
                    w={5}
                    h={5}
                    cursor="pointer"
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
              <Td>SuperAdmin</Td>
              <Td>SuperAdmin</Td>
              <Td>
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="email-alerts" mb="0">
                    Active
                  </FormLabel>
                  <Switch id="email-alerts" />
                </FormControl>
              </Td>
              <Td>
                <Flex align="center" gap={4}>
                  <Icon as={BsEyeFill} w={5} h={5} cursor="pointer" />
                  <Icon
                    as={BsThreeDotsVertical}
                    w={5}
                    h={5}
                    color="green.500"
                    cursor="pointer"
                  />
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
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
    </>
  );
};

export default TempTable;
