import { HStack, Stack, Icon, Text, Tag, Button } from "@chakra-ui/react";
import React from "react";
import { MdOutlineInfo } from "react-icons/md";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

export const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "Center",
      }}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "Center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm"> Total Portfolio Value</Text>

            <Icon as={MdOutlineInfo} />
          </HStack>
          <Text fontWeight="medium" textStyle="h2">
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm"> Wallet Balance</Text>
          </HStack>
          <HStack
            align={{
              base: "flex-start",
              sm: "Center",
            }}
            flexDirection={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack spacing={4}>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <Tag colorScheme="grey">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="grey">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={FaArrowDownLong} />}>Deposit</Button>
        <Button leftIcon={<Icon as={FaArrowUpLong} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};
