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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SightingStatus } from "../types";

const SightingSchema = z.object({
  name: z.string().min(1),
  image: z.optional(z.string().url()),
  description: z.optional(z.string().min(1)),
  contact: z.string().min(1),
  sightingStatus: z.enum([
    SightingStatus.DROPPED_AT_CENTER,
    SightingStatus.IN_POSSESSION,
    SightingStatus.LEFT_AT_LOCATION,
    SightingStatus.OTHER,
  ]),
});

type SightingSchemaType = typeof SightingSchema;

const SightingForm = () => {
  const form = useForm<z.infer<SightingSchemaType>>({
    resolver: zodResolver(SightingSchema),
    defaultValues: {
      name: "",
      contact: "",
      sightingStatus: SightingStatus.LEFT_AT_LOCATION,
    },
  });

  const onSubmit = (values: z.infer<SightingSchemaType>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What did you see?</FormLabel>
              <FormControl>
                <Input
                  placeholder="i.e blue water bottle @ Keeton"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sightingStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where is it now?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the current status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={SightingStatus.DROPPED_AT_CENTER}>
                    {SightingStatus.DROPPED_AT_CENTER}
                  </SelectItem>
                  <SelectItem value={SightingStatus.LEFT_AT_LOCATION}>
                    {SightingStatus.LEFT_AT_LOCATION}
                  </SelectItem>
                  <SelectItem value={SightingStatus.IN_POSSESSION}>
                    {SightingStatus.IN_POSSESSION}
                  </SelectItem>
                  <SelectItem value={SightingStatus.OTHER}>
                    {SightingStatus.OTHER}
                  </SelectItem>
                </SelectContent>
              </Select>
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

export default SightingForm;
