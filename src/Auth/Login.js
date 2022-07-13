import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { saveTokens } from "../service/AuthService";

function Login() {
  const apiUrl = "http://localhost:5000/api/v1/auth/login";
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const [toastState, setToast] = React.useState(false);
  const [toastMsg, setToastMsg] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [toastCount, setToastCount] = React.useState(0);

  const handleClick = () => setShow(!show);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  React.useEffect(() => {
    if (toastState) {
      toast({
        description: toastMsg,
        position: "top",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [toastMsg, toastState, toast, toastCount]);

  const submitForms = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl, formData);
      saveTokens(res.data);
    } catch (error) {
      setToast(true);
      setToastMsg(error.response.data);
      setToastCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <Flex
      justify="center"
      mb={10}
      position="relative"
      top={["400px", "400px", "120px", "120px"]}
    >
      <Flex
        w={["90vw", "70vw", "40vw", "25vw"]}
        borderRadius="2xl"
        bg="#fff"
        boxShadow="base"
        justify="center"
        p={5}
      >
        <VStack textAlign="center" w={["90vw", "90vw", "75vw", "45vw"]}>
          <Heading my={10} textAlign="center">
            Sign In
          </Heading>
          <Text fontWeight={600}>
            Hey, Enter your details to get sign in to your account
          </Text>

          <form onSubmit={submitForms}>
            <Input
              focusBorderColor="#000000"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              mb={2}
            />

            <InputGroup size="md" mb={3}>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Icon h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewIcon /> : <ViewOffIcon />}
                </Icon>
              </InputRightElement>
            </InputGroup>
            <Text textAlign="left">Forgot Password</Text>
            <Box
              as="button"
              width="full"
              mt={4}
              mb={5}
              variant="solid"
              h="3rem"
              borderRadius="md"
              bg="#42C3AA"
              color="#fff"
              type="submit"
              fontWeight="500"
              // onClick={handler}
            >
              Sign in
            </Box>
          </form>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Login;
