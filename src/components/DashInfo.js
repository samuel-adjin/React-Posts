import React from "react";
import { Box, Text, Icon, Flex } from "@chakra-ui/react";

const DashInfo = (props) => {
  return (
    <Flex
      justify="space-around"
      alignItems="center"
      bg="#23D5DB"
      shadow="base"
      color="#fff"
      width={["90vw", "43vw", "30vw", "16vw"]}
      p={5}
      gap={3}
      borderRadius="sm"
    >
      <Box>
        <Text>{props.Number}</Text>
        <Text>{props.title}</Text>
      </Box>
      <Icon as={props.Icon} w={20} h={20} cursor="pointer" />
    </Flex>
  );
};

export default DashInfo;
