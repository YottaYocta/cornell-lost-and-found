import { NextApiRequest, NextApiResponse } from "next";
import { MissingItem, MissingDataResponse } from "../../types";
import { db } from "@/config";
import {
  getDocs,
  addDoc,
  collection,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";

const fakeMissingItemData: MissingItem[] = [
  {
    name: "Green hoodie",
    contact: "832-800-9103",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et orci vitae neque sollicitudin mollis. Curabitur auctor.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Blue Hydro Flask",
    contact: "abc123@cornell.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dui purus, ut facilisis erat dictum vitae.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Blue AirPods Case",
    contact: "IG: @abc123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor metus ut dolor iaculis, ac lacinia felis laoreet.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "Black Laptop Sleeve",
    contact: "john_doe@yahoo.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed malesuada velit non lorem bibendum, a interdum arcu euismod.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Red Backpack",
    contact: "mike123@outlook.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam ut felis venenatis facilisis. Vivamus in eros in purus malesuada dignissim.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Silver Ring",
    contact: "emma_smith@icloud.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin lacus eget quam tristique, eu tincidunt erat venenatis.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "White Airpods Pro",
    contact: "lucas_lee@aol.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis orci sit amet libero vulputate tempor sit amet id libero.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "Navy Jacket",
    contact: "sara_white@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt felis magna, sit amet sollicitudin ante malesuada eget. Vivamus accumsan risus sit amet urna vehicula.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Gold Watch",
    contact: "alex_perez@protonmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in arcu magna. Aliquam erat volutpat. Fusce bibendum quam ac nisi consectetur, a suscipit orci fringilla.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Black Wallet",
    contact: "rachel_king@google.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis ut libero tincidunt porttitor. Vivamus vel lectus quis dui iaculis pharetra.",
    messages: [],
    image: undefined,
    timePosted: new Date(),
    resolved: false,
  },
];

interface FirestoreMissingItem {
  name: string;
  contact: string;
  image: string | null;
  messages: [];
  description?: string;
  timePosted: Timestamp;
  resolved: boolean;
}

export const GET = async () => {
  const missingItemList: MissingItem[] = [];
  const missingItemSnapshot: QuerySnapshot = await getDocs(
    collection(db, "missingItems")
  );
  missingItemSnapshot.forEach((missingItem) => {
    const missingItemFirestoreData: FirestoreMissingItem =
      missingItem.data() as FirestoreMissingItem;
    const missingItemData: MissingItem = {
      name: missingItemFirestoreData.name,
      contact: missingItemFirestoreData.contact,
      image:
        missingItemFirestoreData.image === null
          ? undefined
          : missingItemFirestoreData.image,
      messages: missingItemFirestoreData.messages,
      description: missingItemFirestoreData.description,
      timePosted: missingItemFirestoreData.timePosted.toDate(),
      resolved: missingItemFirestoreData.resolved,
    };
    missingItemList.push(missingItemData);
    console.log(missingItemData.timePosted instanceof Date);
  });
  return Response.json({ missingItems: missingItemList });
};

export const POST = async (req: Request) => {
  const {
    name,
    image,
    description,
    timePosted,
    resolved,
    contact,
  }: MissingItem = await req.json();

  try {
    const docRef = await addDoc(collection(db, "missingItems"), {
      name: name,
      image:
        image == undefined || image == null || image.length <= 1 ? null : image,
      description: description,
      timePosted: Timestamp.fromDate(new Date(timePosted)),
      resolved: resolved,
      contact: contact,
    });
    return Response.json("Missing document written with id:" + docRef.id);
  } catch (error) {
    console.error("error while creating document: ", error);
  }
  console.log(name, image, description, timePosted, resolved, contact);
  return Response.json("Good job");
};
