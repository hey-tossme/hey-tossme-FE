import customAxios from "../customAxios";

export const getLocationList = async () => {
    return await customAxios({
        method: "GET",
        url: "/v2/items/address",
    });
};
