"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MissingItem } from "../types";

const LostSchema = z.object({
  name: z.string().min(1),
  image: z.optional(z.string().url()),
  description: z.string().min(1),
  contact: z.string().min(1),
});

type LostSchemaType = typeof LostSchema;

const LostForm = () => {
  const form = useForm<z.infer<LostSchemaType>>({
    resolver: zodResolver(LostSchema),
    defaultValues: {
      name: "",
      description: "",
      contact: "",
    },
  });

  const onSubmit = async (values: z.infer<LostSchemaType>) => {
    const data: MissingItem = {
      name: values.name,
      image: values.image,
      description: values.description,
      timePosted: new Date(),
      resolved: false,
      contact: values.contact,
      messages: [],
    };
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const fetchResponse = await fetch("/api/missing", settings);
      const resData = await fetchResponse.json();
      console.log("Response: ", resData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="i.e lost water bottle @ Keeton"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Info</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image Link</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field}></Textarea>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Post</Button>
      </form>
    </Form>
  );
};

export default LostForm;
