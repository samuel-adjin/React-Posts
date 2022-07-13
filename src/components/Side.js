import React from "react";
import { Icon, Text, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Side = (props) => {
  return (
    <Flex justify="start" mt="7%" alignItems="center" cursor="pointer">
      <Icon as={props.icon} w={6} h={6} color="green.500" />
      <Text
        fontSize={["1em", "1em", "1em", "1em"]}
        fontWeight="600"
        pl={10}
        color="#595959"
      >
        <Link as={NavLink} to={"/" + props.link}>
          {props.name}
        </Link>
      </Text>
    </Flex>
  );
};

export default Side;
