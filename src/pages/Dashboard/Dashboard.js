import { Grid, GridItem } from "@chakra-ui/react";
import { DashboardLayout } from "../../Components/DashboardLayout";
import { PortfolioSection } from "./components/PortfolioSection";
import { PriceSection } from "./components/PriceSection";
import { Transactions } from "./components/Transactions";
import { InfoCard } from "./components/InfoCard";
export const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/Visual1.png"
            text="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it."
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            inverted={true}
            imgUrl="/Visual.png"
            text="Learn more about our real estate, mortgage, and  corporate account services."
            tagText="Contact"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};
