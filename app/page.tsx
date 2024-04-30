import prisma from "@/prisma/client";
import React from "react";
import Lists from "./components/Lists";
import AddForm from "./components/AddForm";

const page = async () => {
  const lists = await prisma.list.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  console.log(lists);
  return (
    <div className=" mt-2 flex flex-col items-center">
      <AddForm />
      <h1 className=" font-bold text-xl my-2">Lists</h1>
      <Lists lists={lists} />
    </div>
  );
};

export default page;
