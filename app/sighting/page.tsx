"use client";
import { itemSightingsResponse, ItemSighting } from "../types";
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

const getItemSightingData: () => Promise<itemSightingsResponse> = () => {
  return fetch("api/sighting").then((res) => {
    if (!res.ok)
      throw new Error(
        `Error while getting missing item data! status: ${res.status}`
      );
    else return res.json();
  });
};

const MissingPage = () => {
  const [itemSightingData, setItemSightingData] = useState<ItemSighting[]>([]);

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    const data: itemSightingsResponse = await getItemSightingData();
    console.log(data);
    setItemSightingData(data.itemSightings);
  };

  return (
    <div className="w-screen overflow-x-hidden p-8 space-y-8">
      <div>
        <p className="text-5xl">Recent Sightings</p>
      </div>
      <div className="w-full flex flex-row flex-wrap justify-start gap-4">
        {itemSightingData.map((itemSighting, index) => (
          <ItemCard key={index} itemData={itemSighting}></ItemCard>
        ))}
      </div>
    </div>
  );
};
export default MissingPage;
