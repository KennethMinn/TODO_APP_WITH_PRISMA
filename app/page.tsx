import prisma from "@/prisma/client";
import React from "react";
import Lists from "./components/Lists";
import AddForm from "./components/AddForm";
import SearchBar from "./components/SearchBar";
import { ReadonlyURLSearchParams } from "next/navigation";

//  searchParams?: { [key: string]: string | string[] | undefined };
const page = async ({ searchParams }: { searchParams: any }) => {
  const lists = await prisma.list.findMany({
    where: {
      title: {
        contains: searchParams?.title,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(searchParams?.title);

  return (
    <div className=" mt-2 flex flex-col items-center">
      <div className=" my-3">
        <SearchBar />
      </div>
      <AddForm />
      <h1 className=" font-bold text-xl my-2">Lists</h1>
      <Lists lists={lists} />
    </div>
  );
};

export default page;
