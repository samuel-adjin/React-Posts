import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import NavDash from "./NavDash";

const MainDash = () => {
  return (
    <>
      <NavDash />
      <Stack
        width={{ base: "100%", lg: "calc(100% - 300px)" }}
        position={{ lg: "absolute" }}
        right={{ lg: "0" }}
        top={{ lg: "15vh" }}
      >
        <Box mx={{ md: "8" }}>
          <Dashboard />
        </Box>
      </Stack>
    </>
  );
};

export default MainDash;
