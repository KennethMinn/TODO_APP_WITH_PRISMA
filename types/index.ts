import { formSchema } from "@/app/components/AddForm";
import { z } from "zod";

export type TFormSchema = z.infer<typeof formSchema>;
