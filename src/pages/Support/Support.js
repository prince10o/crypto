import React from "react";
import { DashboardLayout } from "../../Components/DashboardLayout";
import { SupportCard } from "./components/SupportCard";
import { ContactCard } from "./components/ContactCard";
import { IoMailSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { InfoCard } from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

export const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="80px">
        <SupportCard
          leftcomponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
          icon={IoMailSharp}
        />
        <SupportCard
          leftcomponent={
            <InfoCard
              inverted={true}
              imgUrl="/Visual.png"
              text="Learn more about our real estate, mortgage, and  corporate account services."
              tagText="Contact"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
          icon={AiFillMessage}
        />
      </Stack>
    </DashboardLayout>
  );
};
