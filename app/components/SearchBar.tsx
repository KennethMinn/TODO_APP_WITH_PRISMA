"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchKey = form.search.value;
    if (!searchKey) return;
    newParams.set("title", searchKey);
    router.push(`?${newParams}`);
    form.search.value = "";
  };

  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        name="search"
        placeholder="search"
        className=" border border-black rounded p-2 me-2"
      />
    </form>
  );
};

export default SearchBar;
