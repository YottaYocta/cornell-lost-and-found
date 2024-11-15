import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import LostForm from "./(components)/LostForm";
import SightingForm from "./(components)/SightingForm";
import Link from "next/link";
/*
const sightingSchema = z.object({
  name: z.string().min(5).max(200),
  image: z.string().url(),
  description: z.optional(z.string().min(5).max(2000)),
  contact: z.string().max(300),
  location: z.optional(z.string().min(5).max(1000)),
  timeFound: z.date(),
  status: z.enum([
    SightingStatus.DROPPED_AT_CENTER,
    SightingStatus.IN_POSSESSION,
    SightingStatus.OTHER,
  ]),
});
*/

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center gap-8">
      <div className="flex flex-col gap-4 w-80 h-5/6">
        <Link href={"/sighting"}>
          <Button className="w-full">See Current Sightings</Button>
        </Link>
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle>Lost Something?</CardTitle>
            <CardDescription>Enter lost item information</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <LostForm></LostForm>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4 w-80 h-5/6">
        <Link href={"/missing"}>
          <Button className="w-full">See Current Missing Items</Button>
        </Link>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Found Something?</CardTitle>
            <CardDescription>Let the community know</CardDescription>
          </CardHeader>
          <CardContent>
            <SightingForm></SightingForm>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
