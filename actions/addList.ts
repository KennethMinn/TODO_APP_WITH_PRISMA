"use server";

import prisma from "@/prisma/client";
import { TFormSchema } from "@/types";
import { revalidatePath } from "next/cache";

export const addTodo = async (data: TFormSchema) => {
  await prisma.list.create({
    data,
  });
  //revalidatePath("/"); - don't need this line if i call router.refresh()
};
