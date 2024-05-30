import { z } from "zod";

export const reportLostItemSchema = z.object({
  itemName: z.string({ required_error: "Item name is required" }),
  categoryId: z.string({ required_error: "Category is required" }),
  brand: z.string({ required_error: "Brand is required" }),
  primaryColor: z.string({ required_error: "Primary color is required" }),
  secondaryColor: z.string({ required_error: "Secondary color is required" }),
  location: z.string({ required_error: "Location is required" }),
  description: z.string({ required_error: "Description is required" }),
  image: z.string({ required_error: "Image is required" }),
});
