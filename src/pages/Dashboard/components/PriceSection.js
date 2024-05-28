import React from "react";
import { CustomCard } from "../../../chakra/card";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard>
      <Flex justifyContent="space-between" align="start">
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
              <HStack fontWeight="medium" color="green">
                <Icon as={GoArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justifyContent="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.png" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};
