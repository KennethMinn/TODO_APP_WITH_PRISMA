import List from "./List";
import { TList } from "@/types";

interface ListsProps {
  lists: TList[];
}

const Lists = ({ lists }: ListsProps) => {
  return (
    <div>
      {lists?.map((list) => (
        <List key={list.id} list={list} />
      ))}
    </div>
  );
};

export default Lists;
