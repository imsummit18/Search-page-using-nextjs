"use client";

import { useRouter } from "next/Navigation";
import { useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setSearch("");
        router.push(`/${search}`)
    }
    return (
        <>
            <form
                className="w-50 flex justify-center md:justify-between" action=""
                onSubmit={handleSubmit}>
                <input type="text"
                    value={search}
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white p-2 w-80 text-xl rounded-xl"
                    placeholder="Search "
                />
                <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">Search</button>
            </form>
        </>
    )
}

export default Search
