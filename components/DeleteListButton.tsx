"use client";

import { deleteTodo } from "@/actions/deleteList";
import React, { useTransition } from "react";

const DeleteListButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      type="button"
      onClick={() => startTransition(() => deleteTodo(id))}
      className=" bg-red-500 text-white p-2 rounded-md"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeleteListButton;
