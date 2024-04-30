"use client";

import prisma from "@/prisma/client";
import { z } from "zod";
import React, { FormEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { TFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTodo } from "../../actions/addList";
import { useRouter } from "next/navigation";

export const formSchema = z.object({
  title: z.string().min(1),
  checked: z.boolean().default(false),
});

const AddForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit = (data: TFormSchema) => {
    try {
      addTodo(data);
      router.refresh();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("title")}
        className=" border border-black rounded p-2 me-2"
      />
      <button
        disabled={isSubmitting}
        className=" bg-black p-2 text-white rounded"
        type="submit"
      >
        Add list
      </button>
    </form>
  );
};

export default AddForm;
