import DeleteListButton from "@/components/DeleteListButton";
import React from "react";

interface List {
  id: string;
  title: string;
}

interface ListsProps {
  lists: List[];
}

const Lists = ({ lists }: ListsProps) => {
  return (
    <div>
      {lists?.map((list) => (
        <div className="flex gap-x-5 items-center mb-4" key={list.id}>
          <h1>{list.title}</h1>
          <DeleteListButton id={list.id} />
        </div>
      ))}
    </div>
  );
};

export default Lists;
