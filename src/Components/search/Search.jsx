import React from "react"

export const Search = ({search} ) => {
    return (
        <>
        <input className="input-search" onInput={(e) => search(e)} type="text" placeholder="search" />
        </>
    )
}