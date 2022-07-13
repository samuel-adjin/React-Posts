import React from "react";
import {
  Box,
  Alert,
  Heading,
  HStack,
  Text,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  AlertIcon,
  Center,
  Stack,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";

function Register() {
  const apiUrl = "http://localhost:5000/api/v1/auth/register";
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [account, setAccount] = React.useState(false);
  const [statuses, setStatuses] = React.useState("success");

  const [formData, setFormData] = React.useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobile: "",
    plainPassword: "",
    confirmPassword: "",
    username: "",
  });
  const [msg, setMsg] = React.useState("");

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitForms = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl, formData);
      console(res.data);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        mobile: "",
        plainPassword: "",
        confirmPassword: "",
        username: "",
      });
      setAccount(true);
      setMsg(
        "Account created successfully. Please login to your email to confirm your account. Thank you"
      );
      console.log(formData);
    } catch (error) {
      console.log(error.response.data);
      setStatuses("error");
      setMsg(error.response.data);
      setAccount(true);
    }
  };

  return (
    <Center position="relative" top={["400px", "400px", "120px", "120px"]}>
      <Stack
        justify="left"
        w={["90vw", "90vw", "40vw", "40vw"]}
        borderRadius="2xl"
        boxShadow="base"
        bg="#fff"
      >
        {account && (
          <Alert status={statuses} mb={5}>
            <AlertIcon />
            {msg}
          </Alert>
        )}

        <Stack p={5}>
          <Heading>Sign Up</Heading>
          <Text>it quick and easy</Text>
        </Stack>
        <Divider variant="solid" />
        <form onSubmit={submitForms}>
          <HStack p={2}>
            <Input
              focusBorderColor="#000000"
              placeholder="First Name"
              name="firstName"
              variant="filled"
              onChange={HandleChange}
              value={formData.firstName}
            />
            <Input
              focusBorderColor="#000000"
              placeholder="Other Name"
              name="middleName"
              variant="filled"
              onChange={HandleChange}
              value={formData.middleName}
            />
            <Input
              focusBorderColor="#000000"
              placeholder="Last Name"
              name="lastName"
              variant="filled"
              onChange={HandleChange}
              value={formData.lastName}
            />
          </HStack>
          <VStack p={2}>
            <Input
              focusBorderColor="#000000"
              placeholder="Email"
              name="email"
              variant="filled"
              onChange={HandleChange}
              value={formData.email}
            />
          </VStack>
          <HStack p={2}>
            <Input
              focusBorderColor="#000000"
              placeholder="Username"
              name="username"
              variant="filled"
              onChange={HandleChange}
              value={formData.username}
            />

            <Input
              focusBorderColor="#000000"
              placeholder="Mobile"
              name="mobile"
              variant="filled"
              type="number"
              onChange={HandleChange}
              value={formData.mobile}
            />
          </HStack>
          <HStack p={2}>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
                name="plainPassword"
                variant="filled"
                onChange={HandleChange}
                value={formData.plainPassword}
              />
              <InputRightElement width="4.5rem">
                <Icon h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Icon>
              </InputRightElement>
            </InputGroup>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                variant="filled"
                onChange={HandleChange}
                value={formData.confirmPassword}
              />
              <InputRightElement width="4.5rem">
                <Icon h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Icon>
              </InputRightElement>
            </InputGroup>
          </HStack>
          <Text textAlign="center" fontSize="sm" p={2}>
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy. You may receive SMS Notifications from us and can opt out
            any time.
          </Text>
          <Center>
            <Box
              as="button"
              width="30vw"
              mt={4}
              mb={10}
              variant="solid"
              h="3rem"
              borderRadius="md"
              bg="#42C3AA"
              color="#fff"
              type="submit"
              fontWeight="500"
            >
              Sign up
            </Box>
          </Center>
        </form>
      </Stack>
    </Center>
  );
}

export default Register;
