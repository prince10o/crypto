import { DashboardLayout } from "../../Components/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineFileDownload } from "react-icons/md";
import { TabList, TabPanels, Tab, TabPanel, Tabs } from "@chakra-ui/react";
import { TransactionTable } from "./components/TransactionTable";

export const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title="Transaction">
      <Flex justifyContent="end" m="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList pt="4" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="260px" pr="6">
              <InputLeftElement pointerEvents="none">
                <BsSearch color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};
