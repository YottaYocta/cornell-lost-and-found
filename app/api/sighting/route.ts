import { ItemSighting, seenItemsResponse, SightingStatus } from "../../types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config";

const fakeSeenItemData: ItemSighting[] = [
  {
    name: "Green hoodie",
    contact: "832-800-9103",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et orci vitae neque sollicitudin mollis. Curabitur auctor.",
    status: SightingStatus.LEFT_AT_LOCATION,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Blue Hydro Flask",
    contact: "abc123@cornell.edu",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dui purus, ut facilisis erat dictum vitae.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Blue AirPods Case",
    contact: "IG: @abc123",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor metus ut dolor iaculis, ac lacinia felis laoreet.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "Black Laptop Sleeve",
    contact: "john_doe@yahoo.com",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed malesuada velit non lorem bibendum, a interdum arcu euismod.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Red Backpack",
    contact: "mike123@outlook.com",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam ut felis venenatis facilisis. Vivamus in eros in purus malesuada dignissim.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Silver Ring",
    contact: "emma_smith@icloud.com",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin lacus eget quam tristique, eu tincidunt erat venenatis.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "White Airpods Pro",
    contact: "lucas_lee@aol.com",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis orci sit amet libero vulputate tempor sit amet id libero.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "Navy Jacket",
    contact: "sara_white@gmail.com",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt felis magna, sit amet sollicitudin ante malesuada eget. Vivamus accumsan risus sit amet urna vehicula.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Gold Watch",
    contact: "alex_perez@protonmail.com",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in arcu magna. Aliquam erat volutpat. Fusce bibendum quam ac nisi consectetur, a suscipit orci fringilla.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Black Wallet",
    contact: "rachel_king@google.com",
    image: undefined,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis ut libero tincidunt porttitor. Vivamus vel lectus quis dui iaculis pharetra.",
    status: SightingStatus.IN_POSSESSION,
    timePosted: new Date(),
    resolved: false,
  },
];

export const GET = async () => {
  const seenData: seenItemsResponse = {
    itemsSeen: fakeSeenItemData,
  };
  return Response.json(seenData);
};

export const POST = async (req: Request) => {
  const {
    name,
    image,
    description,
    timePosted,
    resolved,
    contact,
    status,
  }: ItemSighting = await req.json();

  try {
    const docRef = await addDoc(collection(db, "itemSightings"), {
      name: name,
      image:
        image === undefined || image == null || image.length <= 1
          ? null
          : image,
      description: description,
      timePosted: timePosted,
      resolved: resolved,
      contact:
        contact === undefined || contact == null || contact.length <= 1
          ? null
          : image,
      status: status,
    });
    return Response.json("Sighting document written with id:" + docRef.id);
  } catch (error) {
    console.error("error while creating document: ", error);
  }
  console.log(name, image, description, timePosted, resolved, contact);
  return Response.json("Good job");
};
