import customAxios from "../customAxios";

export const getProductList = async (items: any, pageNum: Number, size: Number) => {
    const { region, startDue, endDue, searchTitle, category } = items;
    return await customAxios({
        method: "GET",
        url: "/v2/items",
        params: {
            region: region,
            startDue: startDue,
            endDue: endDue,
            searchTitle: searchTitle,
            category: category,
            pageNum: pageNum,
            size: size,
        },
    });
};

export const getAllProductList = async (pageNum: Number, size: Number) => {
    return await customAxios({
        method: "GET",
        url: "/v2/items",
        params: {
            pageNum: pageNum,
            size: size,
        },
    });
};

export const getDetailProduct = async (itemId: Number) => {
    return await customAxios({
        method: "GET",
        url: `v2/items/${itemId}`,
    });
};

export const deleteProduct = async (token: string, itemId: Number) => {
    return await customAxios({
        method: "DELETE",
        url: `v1/items/${itemId}`,
        headers: {
            Authorization: token,
        },
    });
};

export const putProduct = async (token: string, body: any) => {
    const { addressDetail, address, dueDate, title, contents, imageUrl, price, category } = body;
    return await customAxios({
        method: "POST",
        url: "v1/items",
        headers: {
            Authorization: token,
        },
        data: {
            address: address,
            addressDetail: addressDetail,
            title: title,
            contents: contents,
            imageUrl: imageUrl,
            dueDate: dueDate,
            price: price,
            category: category,
        },
    });
};

export const editProduct = async (token: string, body: any, itemId: Number) => {
    const { addressDetail, address, dueDate, title, contents, imageUrl, price, category } = body;
    return await customAxios({
        method: "PATCH",
        url: `v1/items/${itemId}`,
        headers: {
            Authorization: token,
        },
        data: {
            address: address,
            addressDetail: addressDetail,
            title: title,
            contents: contents,
            imageUrl: imageUrl,
            dueDate: dueDate,
            price: price,
            category: category,
        },
    });
};
