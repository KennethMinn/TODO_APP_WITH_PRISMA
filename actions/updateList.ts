"use server";

import prisma from "@/prisma/client";
import { TFormSchema } from "@/types";

export const updateTodo = async (id: string, data: TFormSchema) => {
  await prisma.list.update({
    where: {
      id,
    },
    data,
  });
};
