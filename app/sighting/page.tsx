"use client";
import { seenItemsResponse, ItemSighting } from "../types";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ItemCard from "../(components)/ItemCard";

const getItemSightingData: () => Promise<seenItemsResponse> = () => {
  return fetch("api/sighting").then((res) => {
    if (!res.ok)
      throw new Error(
        `Error while getting missing item data! status: ${res.status}`
      );
    else return res.json();
  });
};

const MissingPage = () => {
  const [missingItemData, setItemSightingData] = useState<ItemSighting[]>([]);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    const data: seenItemsResponse = await getItemSightingData();
    setItemSightingData(data.itemsSeen);
  };

  return (
    <div className="w-screen overflow-x-hidden p-8 space-y-8">
      <div>
        <p className="text-5xl">Recent Sightings</p>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start gap-4">
        {missingItemData.map((missingItem, index) => (
          <ItemCard key={index} itemData={missingItem}></ItemCard>
        ))}
      </div>
    </div>
  );
};
export default MissingPage;
