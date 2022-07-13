import React from "react";
import {
  Box,
  Avatar,
  Text,
  Stack,
  Flex,
  Button,
  VStack,
  Input,
  Icon,
  Divider,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import { HiPencil } from "react-icons/hi";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSaveOpen,
    onOpen: onSaveOpen,
    onClose: onSaveClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Flex
        bg="#fff"
        p={5}
        mb={10}
        borderRadius="base"
        direction={["column", "column", "column", "row"]}
        w="100%"
      >
        <Stack ml={5} w={["80%", "80%", "80%", "80%"]}>
          <Box mb={12}>
            <Text fontWeight="bold" fontSize="1.4rem">
              My Profile
            </Text>
            <Text>Manage your profile</Text>
          </Box>
          <Stack p={3} w="100%">
            <Text
              fontSize="1rem"
              ml={[4, 4, 8, 8]}
              align={["center", "center", "start", "start"]}
            >
              Profile Picture
            </Text>
            <Flex
              direction={["row", "row", "row", "row"]}
              wrap="wrap"
              w="100%"
              justify={["center", "center", "start", "start"]}
            >
              <Avatar boxSize="8.25em"></Avatar>
              <Flex
                direction="column"
                pl={3}
                gap={3}
                justify="center"
                mt={[5, 5, 0, 5]}
              >
                <Button colorScheme="green" leftIcon={<HiPencil />}>
                  Edit profile picture
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  leftIcon={<BsFillTrashFill />}
                  onClick={onDeleteOpen}
                >
                  Delete picture
                </Button>
              </Flex>
            </Flex>

            <Stack pt="20%" pb="5%">
              <Flex>
                <Text align="start" fontSize="1.2rem" fontWeight="bold" mb={3}>
                  Personal Information
                </Text>
              </Flex>

              <Text>First Name</Text>
              <Input
                focusBorderColor="#000000"
                placeholder="First Name"
                name="firstName"
                w={["80vw", "80vw", "60vw", "30vw"]}
                value="Samuel"
                mb={2}
              />
              <Text>Middle Name</Text>
              <Input
                focusBorderColor="#000000"
                placeholder="Middle Name"
                name="otherName"
                w={["80vw", "80vw", "60vw", "30vw"]}
                value="Adams"
                mb={2}
              />
              <Text>Last Name</Text>
              <Input
                focusBorderColor="#000000"
                placeholder="Last Name"
                name="lastName"
                value="Adjin"
                w={["80vw", "80vw", "60vw", "30vw"]}
                mb={2}
              />
              <Text>Email</Text>
              <Input
                focusBorderColor="#000000"
                placeholder="Email"
                value="samueladams990@gmail.com"
                name="lastName"
                w={["80vw", "80vw", "60vw", "30vw"]}
                mb={2}
                isDisabled
              />

              <Text>Mobile</Text>
              <Input
                focusBorderColor="#000000"
                placeholder="Last Name"
                name="lastName"
                value="0573095386"
                w={["80vw", "80vw", "60vw", "30vw"]}
                mb={2}
              />
              <Button
                display="block"
                width={["80vw", "80vw", "60vw", "30vw"]}
                mt={4}
                mb={5}
                variant="solid"
                h="3rem"
                borderRadius="md"
                bg="#42C3AA"
                color="#fff"
                type="submit"
                fontWeight="500"
                colorScheme="green"
                onClick={onSaveOpen}
              >
                Save
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack borderLeft="2px" color="gray.200" ml={10} p={5}>
          <Flex>
            <Box mb={10}>
              <Text fontSize="1.2rem" fontWeight="bold" color="black" mb={3}>
                Description
              </Text>
              <Text fontSize="0.9rem" color="black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </Box>
            <Icon
              as={HiPencil}
              w={6}
              h={6}
              color="green.300"
              cursor="pointer"
              onClick={onOpen}
            />
          </Flex>
          <Divider />
          <Flex gap={8} wrap="wrap">
            <Box color="black" mt={10}>
              <Text fontWeight="bold">210k</Text>
              <Text fontSize="0.7rem">Number Of Posts</Text>
            </Box>
            <Box color="black" mt={10}>
              <Text fontWeight="bold">4510k</Text>
              <Text fontSize="0.7rem">Number Of Likes</Text>
            </Box>
            <Box color="black" mt={10}>
              <Text fontWeight="bold">210</Text>
              <Text fontSize="0.7rem">Number Of Comments</Text>
            </Box>
            <Box color="black" mt={10}>
              <Text fontWeight="bold">20</Text>
              <Text fontSize="0.7rem">Number Of Awards</Text>
            </Box>
          </Flex>
        </Stack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Text mb="8px">Description</Text>
              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="Here is a sample placeholder"
                size="sm"
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        blockScrollOnMount={false}
        isOpen={isSaveOpen}
        onClose={onSaveClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1rem">Are you sure you want to save changes</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Yes
            </Button>
            <Button colorScheme="red" onClick={onSaveClose}>
              No
            </Button>
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
          <ModalHeader>Delete Profile Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="1rem">
              Are you sure you want to delete your profile picture
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Yes
            </Button>
            <Button colorScheme="red" onClick={onDeleteClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Profile;
