import React from "react";
import CategoryBar from "../components/category/CategoryBar";
import SearchBar from "../components/category/SearchBar";
import CardList from "../components/category/CardList";
import Pagination from "../components/@common/product/Pagination";

export default function Category() {
    return (
        <div className="category-wrapper">
            <CategoryBar />
            <SearchBar />
            <CardList />
            <Pagination />
        </div>
    );
}
