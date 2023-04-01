import React, { useEffect } from "react";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Pagination from "../@common/product/Pagination";
import { useState } from "react";
import { getProductList } from "../../api/category/product";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { listProps } from "./_Category.interface";

export default function CategoryWrapper() {
    const searchType = useAppSelector((state) => state.search);
    const [items, setItems] = useState<listProps[] | null>(null);
    const [page, setPage] = useState<number>(1);
    console.log(searchType);

    useEffect(() => {
        getProductList(searchType, 1, 8).then((response) => {
            setItems(response.data.content);
        });
    }, []);

    useEffect(() => {
        getProductList(searchType, page, 8).then((response) => {
            setItems(response.data.content);
        });
    }, [page]);

    return (
        <>
            <CategoryBar setItem={setItems} />
            <SearchBar setItems={setItems} />
            <CardList items={items} />
            <Pagination page={page} setPage={setPage} items={items} />
        </>
    );
}
