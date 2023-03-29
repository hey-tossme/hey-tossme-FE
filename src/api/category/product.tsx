import { searchStateProps } from "../../components/category/_Category.interface";
import customAxios from "../customAxios";

export const getProductList = async (items: any, pageNum: Number, size: Number) => {
    const { region, startDue, endDue, searchTitle, category } = items;

    return await customAxios({
        method: "GET",
        url: "/v2/items",
        data: {
            params: {
                region: region,
                startDue: startDue,
                endDue: endDue,
                searchTitle: searchTitle,
                category: category,
                pageNum: pageNum,
                size: size,
            },
        },
    });
};

export const getAllProductList = async () => {
    return await customAxios({
        method: "GET",
        url: "/v2/items",
    });
};
