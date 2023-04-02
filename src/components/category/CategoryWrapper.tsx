import React, { useEffect } from "react";
import CategoryBar from "./CategoryBar";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Pagination from "../@common/product/Pagination";
import { useState } from "react";
import { getProductList } from "../../api/product/product";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { listProps } from "./_Category.interface";
import ModalPortal from "../@common/modal/portal/ModalPortal";
import LoginConfirmModal from "../@common/modal/LoginConfirmModal";

export default function CategoryWrapper() {
    const searchType = useAppSelector((state) => state.search);
    const modalOpen = useAppSelector((state) => state.modal.modalOpen);
    const [items, setItems] = useState<listProps[] | null>(null);
    const [page, setPage] = useState<Number>(0);

    useEffect(() => {
        getProductList(searchType, page, 8).then((response) => {
            setItems(response.data.content);
        });
    }, [page]);

    return (
        <>
            <CategoryBar setItem={setItems} />
            <SearchBar setItems={setItems} />
            <CardList items={items} page={page} />
            <Pagination page={page} setPage={setPage} items={items} />
            {modalOpen ? (
                <ModalPortal>
                    <LoginConfirmModal />
                </ModalPortal>
            ) : null}
        </>
    );
}
