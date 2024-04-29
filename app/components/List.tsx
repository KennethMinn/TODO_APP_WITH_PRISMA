"use client";

import DeleteListButton from "@/components/DeleteListButton";
import { TFormSchema, TList } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "./AddForm";
import { updateTodo } from "@/actions/updateList";
import { useRouter } from "next/navigation";

interface ListProps {
  list: TList;
}

const List = ({ list }: ListProps) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const { register, handleSubmit } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: list,
  });

  const onUpdate = (data: TFormSchema) => {
    console.log(data);
    updateTodo(list.id, data);
    setIsEdit(false);
    router.refresh();
  };

  return (
    <div className="flex gap-x-5 items-center mb-4">
      {isEdit ? (
        <form onSubmit={handleSubmit(onUpdate)}>
          <input
            className="border border-black rounded p-2 me-2"
            type="text"
            {...register("title")}
          />
        </form>
      ) : (
        <h1 className=" cursor-pointer" onDoubleClick={() => setIsEdit(true)}>
          {list.title}
        </h1>
      )}

      <DeleteListButton id={list.id} />
    </div>
  );
};

export default List;
