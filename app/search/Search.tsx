"use client";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form className="mb-3 bg-white border" onSubmit={handleSearch}>
      <input
        type="text"
        className="px-2"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 border-r rounded-lg"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
