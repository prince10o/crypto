import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { SideDrawer } from "./SideDrawer";

export const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "flex",
        }}
      >
        <Sidebar />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container
          mt="6"
          maxW="70rem"
          overflowY="auto"
          overflowX="hidden"
          h="calc(100vh-64px"
        >
          {children}
        </Container>
      </Box>
    </Flex>
  );
};
