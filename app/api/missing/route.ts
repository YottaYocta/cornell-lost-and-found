import { NextApiRequest, NextApiResponse } from "next";
import { MissingItem, MissingDataResponse } from "../../types";

const fakeMissingItemData: MissingItem[] = [
  {
    name: "Green Brevard hoodie",
    contact: "832-800-9103",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et orci vitae neque sollicitudin mollis. Curabitur auctor.",
    messages: [],
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Blue Hydro Flask",
    contact: "abc123@cornell.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dui purus, ut facilisis erat dictum vitae.",
    messages: [],
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Blue AirPods Case",
    contact: "IG: @abc123",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor metus ut dolor iaculis, ac lacinia felis laoreet.",
    messages: [],
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "Black Laptop Sleeve",
    contact: "john_doe@yahoo.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed malesuada velit non lorem bibendum, a interdum arcu euismod.",
    messages: [],
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Red Backpack",
    contact: "mike123@outlook.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam ut felis venenatis facilisis. Vivamus in eros in purus malesuada dignissim.",
    messages: [],
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Silver Ring",
    contact: "emma_smith@icloud.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin lacus eget quam tristique, eu tincidunt erat venenatis.",
    messages: [],
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "White Airpods Pro",
    contact: "lucas_lee@aol.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis orci sit amet libero vulputate tempor sit amet id libero.",
    messages: [],
    timePosted: new Date(),
    resolved: true,
  },
  {
    name: "Navy Jacket",
    contact: "sara_white@gmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt felis magna, sit amet sollicitudin ante malesuada eget. Vivamus accumsan risus sit amet urna vehicula.",
    messages: [],
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Gold Watch",
    contact: "alex_perez@protonmail.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in arcu magna. Aliquam erat volutpat. Fusce bibendum quam ac nisi consectetur, a suscipit orci fringilla.",
    messages: [],
    timePosted: new Date(),
    resolved: false,
  },
  {
    name: "Black Wallet",
    contact: "rachel_king@google.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis ut libero tincidunt porttitor. Vivamus vel lectus quis dui iaculis pharetra.",
    messages: [],
    timePosted: new Date(),
    resolved: false,
  },
];

export const GET = async () => {
  const missingData: MissingDataResponse = {
    missingItems: fakeMissingItemData,
  };
  return Response.json(missingData);
};
