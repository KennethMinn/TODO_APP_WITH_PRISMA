"use server";

import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export const deleteTodo = async (id: string) => {
  await prisma.list.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
