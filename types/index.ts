import { formSchema } from "@/app/components/AddForm";
import { z } from "zod";

export type TFormSchema = z.infer<typeof formSchema>;

export interface TList {
  id: string;
  title: string;
  checked: boolean;
}
