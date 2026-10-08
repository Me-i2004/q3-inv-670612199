import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { OverviewCards } from "./OverviewCards";
import { ItemList } from "./ItemList";
import { CategoryCards } from "./CategoryCards";

export default function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="category">By Category</TabsTrigger>
      </TabsList>

      <TabsContent value="">
        <OverviewCards />
        <ItemList />
      </TabsContent>

      <TabsContent value="">
        ItemList
      </TabsContent>
    </Tabs>
  );
}