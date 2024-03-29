import React, { useEffect } from "react";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Pagination from "../@common/product/Pagination";
import { useState } from "react";
import { getProductList } from "../../api/product/product";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { listProps } from "./_Category.interface";

export default function CategoryWrapper() {
    const searchType = useAppSelector((state) => state.search);
    const [category, setCategory] = useState<number>(1);
    const [items, setItems] = useState<listProps[]>([]);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    const getItems = async () => {
        const result = await getProductList(searchType, page, 8);
        setItems(result.data.content);
        setTotalPage(result.data.totalPages);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        getItems();
        scrollToTop();
    }, [page, category]);

    return (
        <>
            <CategoryBar
                setItem={setItems}
                category={category}
                setCategory={setCategory}
                setPage={setPage}
            />
            <SearchBar setItems={setItems} />
            <CardList items={items} page={page} />
            <Pagination page={page} setPage={setPage} items={items} totalPage={totalPage} />
        </>
    );
}
