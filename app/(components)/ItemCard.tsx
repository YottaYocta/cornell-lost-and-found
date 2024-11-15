import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ItemData } from "../types";
import { TRUNCATION_CHAR_THRESHOLD } from "../constants";
import Image from "next/image";
import { Dialog } from "@/components/ui/dialog";

const ItemCard = ({ itemData }: { itemData: ItemData }) => {
  return (
    <Card className="w-64 h-80">
      <CardHeader>
        <CardTitle>{itemData.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {itemData.image ? (
          <image width={200} height={200} href={itemData.image}></image>
        ) : (
          <></>
        )}
        <p>
          {itemData.description &&
          itemData.description.length > TRUNCATION_CHAR_THRESHOLD
            ? itemData.description.substring(0, TRUNCATION_CHAR_THRESHOLD) +
              "..."
            : itemData.description}
        </p>
        {itemData.timePosted ? (
          <p>{new Date(itemData.timePosted).toDateString()}</p>
        ) : (
          <></>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
