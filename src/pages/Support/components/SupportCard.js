import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const SupportCard = ({ leftcomponent, icon, title, text }) => {
  return (
    <Flex
      justify="space-between"
      gap="6"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={icon} boxSize="6" color="p.purple" />
        <Text as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60" textStyle="h6">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftcomponent}
      </Box>
    </Flex>
  );
};
